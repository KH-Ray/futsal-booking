package main

import (
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type Application interface {
	Routes() *httprouter.Router
	StatusHandler(w http.ResponseWriter, r *http.Request)
	GetLapangan(w http.ResponseWriter, r *http.Request)
	WriteJSON(w http.ResponseWriter, status int, data interface{}, wrap string) error
}

type application struct {
	config Config
	logger *log.Logger
}

func GetApplication(cfg Config, log *log.Logger) Application {
	return &application{config: cfg, logger: log}
}
