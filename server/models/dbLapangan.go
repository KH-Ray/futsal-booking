package models

import (
	"context"
	"database/sql"
	"fmt"
	"time"
)

type DBModel struct {
	DB *sql.DB
}

func (m *DBModel) Get(id int) (*Lapangan, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	query := `SELECT 
    	id, title, rating, description
    FROM 
		lapangan 
	WHERE id = $1`

	row := m.DB.QueryRowContext(ctx, query, id)

	var lapangan Lapangan

	err := row.Scan(
		&lapangan.ID,
		&lapangan.Title,
		&lapangan.Rating,
		&lapangan.Desc,
	)

	if err != nil {
		return nil, err
	}

	query = `SELECT
	ll.id, ll.lapangan_id, ll.lokasi_id,l.nama_lokasi
	FROM
		lokasi_lapangan ll
		LEFT JOIN listlokasi l on (l.id = ll.lokasi_id)
	WHERE
		ll.lapangan_id = $1`

	rows, _ := m.DB.QueryContext(ctx, query, id)
	defer rows.Close()

	listlokasi := make(map[int]string)
	for rows.Next() {
		var ll LokasiLapangan
		err := rows.Scan(
			&ll.ID,
			&ll.LapanganID,
			&ll.LokasiID,
			&ll.Lokasi.NamaLokasi,
		)
		if err != nil {
			return nil, err
		}
		listlokasi[ll.LokasiID] = ll.Lokasi.NamaLokasi
	}

	lapangan.LokasiLapangan = listlokasi
	return &lapangan, nil
}

func (m *DBModel) All(lokasi ...int) ([]*Lapangan, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	where := " "

	if len(lokasi) > 0 {
		where = fmt.Sprintf("WHERE id IN(SELECT lapangan_id FROM lokasi_lapangan WHERE lokasi_id = %d)", lokasi[0])
	}

	query := fmt.Sprintf(`SELECT id, title, rating, description FROM lapangan %s ORDER BY title`, where)

	rows, err := m.DB.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var ListLapangan []*Lapangan

	for rows.Next() {
		var lapangan Lapangan
		err := rows.Scan(
			&lapangan.ID,
			&lapangan.Title,
			&lapangan.Rating,
			&lapangan.Desc,
		)
		if err != nil {
			return nil, err
		}

		LokasiQuery := `SELECT
		ll.id, ll.lapangan_id, ll.lokasi_id,l.nama_lokasi
		FROM
			lokasi_lapangan ll
			LEFT JOIN listlokasi l on (l.id = ll.lokasi_id)
		WHERE
			ll.lapangan_id = $1`

		lokasiRows, _ := m.DB.QueryContext(ctx, LokasiQuery, lapangan.ID)
		defer lokasiRows.Close()

		listlokasi := make(map[int]string)
		for lokasiRows.Next() {

			var ll LokasiLapangan

			err := lokasiRows.Scan(
				&ll.ID,
				&ll.LapanganID,
				&ll.LokasiID,
				&ll.Lokasi.NamaLokasi,
			)
			if err != nil {
				return nil, err
			}
			listlokasi[ll.LokasiID] = ll.Lokasi.NamaLokasi
		}
		lokasiRows.Close()
		lapangan.LokasiLapangan = listlokasi
		ListLapangan = append(ListLapangan, &lapangan)
	}
	return ListLapangan, nil
}

func (m *DBModel) GetAllLokasi() ([]*Lokasi, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	query := `SELECT 
    	id,nama_lokasi
    FROM 
		listlokasi
	ORDER BY nama_lokasi`

	rows, err := m.DB.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var ListLokasi []*Lokasi

	for rows.Next() {
		var lokasi Lokasi
		err := rows.Scan(
			&lokasi.ID,
			&lokasi.NamaLokasi,
		)
		if err != nil {
			return nil, err
		}

		ListLokasi = append(ListLokasi, &lokasi)
	}
	return ListLokasi, nil
}

func (m *DBModel) InsertLapangan(lapangan Lapangan) error {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	query := `INSERT INTO lapangan (title, rating, description) VALUES ($1, $2, $3)`

	_, err := m.DB.ExecContext(ctx, query,
		lapangan.Title,
		lapangan.Rating,
		lapangan.Desc,
	)

	if err != nil {
		return err
	}

	return nil
}

func (m *DBModel) UpdateLapangan(lapangan Lapangan) error {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	query := `UPDATE lapangan set title = $1, rating = $2, description = $3 WHERE id = $4`

	_, err := m.DB.ExecContext(ctx, query,
		lapangan.Title,
		lapangan.Rating,
		lapangan.Desc,
		lapangan.ID,
	)

	if err != nil {
		return err
	}

	return nil
}

func (m *DBModel) DeleteLapangan(id int) error {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	query := `DELETE FROM lokasi_lapangan WHERE lapangan_id = $1`

	_, err := m.DB.ExecContext(ctx, query, id)
	if err != nil {
		return err
	}

	query = `DELETE FROM lapangan WHERE id = $1`
	_, err = m.DB.ExecContext(ctx, query, id)
	if err != nil {
		return err
	}
	return nil
}
