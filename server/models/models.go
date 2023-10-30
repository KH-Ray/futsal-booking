package models

import "database/sql"

type Models struct {
	DB DBModel
}

func NewModels(db *sql.DB) Models {
	return Models{
		DB: DBModel{DB: db},
	}
}

type Lapangan struct {
	ID             int            `json:"id"`
	Title          string         `json:"title"`
	Rating         int            `json:"rating"`
	Desc           string         `json:"description"`
	LokasiLapangan map[int]string `json:"lokasi"`
}

// Error implements error.
func (Lapangan) Error() string {
	panic("unimplemented")
}

type Lokasi struct {
	ID         int    `json:"id"`
	NamaLokasi string `json:"nama_lokasi"`
}

type LokasiLapangan struct {
	ID         int    `json:"id"`
	LapanganID int    `json:"lapangan_id"`
	LokasiID   int    `json:"lokasi_id"`
	Lokasi     Lokasi `json:"lokasi"`
}
