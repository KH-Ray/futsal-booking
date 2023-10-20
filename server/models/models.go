package models

type Lapangan struct {
	ID     int    `json:"id"`
	Title  string `json:"title"`
	Desc   string `json:"description"`
	Rating int    `json:"rating"`
}

type Config struct {
	Port int
	Env  string
}

type AppStatus struct {
	Status     string `json:"status"`
	Enviroment string `json:"enviroment"`
	Version    string `json:"version"`
}
