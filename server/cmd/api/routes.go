package main

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func (app *Application) Routes() http.Handler {
	router := httprouter.New()

	router.HandlerFunc(http.MethodGet, "/status", app.statusHandler)

	router.HandlerFunc(http.MethodGet, "/lapangan/:id", app.GetLapangan)
	router.HandlerFunc(http.MethodGet, "/lapangan", app.GetAllListLapangan)

	router.HandlerFunc(http.MethodGet, "/listlokasi", app.GetAllListLokasi)
	router.HandlerFunc(http.MethodGet, "/listlokasi/:lokasi_id/lapangan", app.GetAllListLapanganByLokasi)

	router.HandlerFunc(http.MethodPost, "/admin/lapangan/add", app.AddLapangan)
	router.HandlerFunc(http.MethodPost, "/admin/lapangan/edit", app.EditLapangan)
	router.HandlerFunc(http.MethodPost, "/admin/lapangan/delete", app.DeleteLapangan)

	return app.enableCORS(router)
}
