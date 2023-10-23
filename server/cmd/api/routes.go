package main

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func (app *Application) Routes() http.Handler {
	router := httprouter.New()

	router.HandlerFunc(http.MethodGet, "/status", app.statusHandler)
	router.HandlerFunc(http.MethodGet, "/lapangan/:id", app.GetLapangan)
	router.HandlerFunc(http.MethodGet, "/lapangan", app.GetAllLapangan)

	return app.enableCORS(router)
}
