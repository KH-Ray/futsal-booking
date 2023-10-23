package models

import (
	"context"
	"database/sql"
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

	return &lapangan, nil
}

func (m *DBModel) All() ([]*Lapangan, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	query := `
	SELECT 
    	id, title, rating, description
    FROM 
		lapangan 
	ORDER BY 
		title
	`

	rows, err := m.DB.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var AllLapangan []*Lapangan

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
		AllLapangan = append(AllLapangan, &lapangan)
	}

	return AllLapangan, nil
}
