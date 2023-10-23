package main

import (
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

func (app *Application) GetLapangan(w http.ResponseWriter, r *http.Request) {
	params := httprouter.ParamsFromContext(r.Context())

	id, err := strconv.Atoi(params.ByName("id"))
	if err != nil {

		app.errorJSON(w, err)
		return
	}

	lapangan, err := app.models.DB.Get(id)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	err = app.WriteJSON(w, http.StatusOK, lapangan, "Lapangan")
	if err != nil {
		app.errorJSON(w, err)
		return
	}
}

func (app *Application) GetAllLapangan(w http.ResponseWriter, r *http.Request) {

	AllLapangan, err := app.models.DB.All()
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	err = app.WriteJSON(w, http.StatusOK, AllLapangan, "Lapangan")
	if err != nil {
		app.errorJSON(w, err)
		return
	}
}
