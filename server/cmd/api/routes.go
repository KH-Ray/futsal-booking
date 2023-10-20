package main

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func (App *application) Routes() *httprouter.Router {
	router := httprouter.New()

	router.HandlerFunc(http.MethodGet, "/status", App.StatusHandler)
	router.HandlerFunc(http.MethodGet, "/lapangan/:id", App.GetLapangan)

	return router
}
