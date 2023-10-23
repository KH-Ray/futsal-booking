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
	ID     int    `json:"id"`
	Title  string `json:"title"`
	Rating int    `json:"rating"`
	Desc   string `json:"description"`
}
