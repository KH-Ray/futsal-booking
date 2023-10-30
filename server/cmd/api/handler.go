package main

import (
	"ServerBook/models"
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

type LapanganPayload struct {
	ID     string `json:"id"`
	Title  string `json:"title"`
	Rating string `json:"rating"`
	Desc   string `json:"description"`
}

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

func (app *Application) GetAllListLapangan(w http.ResponseWriter, r *http.Request) {

	ListLapangan, err := app.models.DB.All()
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	err = app.WriteJSON(w, http.StatusOK, ListLapangan, "ListLapangan")
	if err != nil {
		app.errorJSON(w, err)
		return
	}
}

func (app *Application) GetAllListLokasi(w http.ResponseWriter, r *http.Request) {

	ListLokasi, err := app.models.DB.GetAllLokasi()
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	err = app.WriteJSON(w, http.StatusOK, ListLokasi, "ListLokasi")
	if err != nil {
		app.errorJSON(w, err)
		return
	}
}

func (app *Application) GetAllListLapanganByLokasi(w http.ResponseWriter, r *http.Request) {
	params := httprouter.ParamsFromContext(r.Context())
	LokasiID, err := strconv.Atoi(params.ByName("lokasi_id"))
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	ListLapangan, err := app.models.DB.All(LokasiID)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	err = app.WriteJSON(w, http.StatusOK, ListLapangan, "ListLapangan")
	if err != nil {
		app.errorJSON(w, err)
		return
	}
}

func (app *Application) AddLapangan(w http.ResponseWriter, r *http.Request) {
	var payload LapanganPayload
	err := json.NewDecoder(r.Body).Decode(&payload)
	if err != nil {
		log.Println(err)
		app.errorJSON(w, err)
		return
	}
	var lapangan models.Lapangan

	lapangan.ID, _ = strconv.Atoi(payload.ID)
	lapangan.Title = payload.Title
	lapangan.Rating, _ = strconv.Atoi(payload.Rating)
	lapangan.Desc = payload.Desc

	//insert query lapangan
	err = app.models.DB.InsertLapangan(lapangan)
	if err != nil {
		log.Println(err)
		app.errorJSON(w, err)
		return
	}

	type jsonRes struct {
		OK bool `json:"ok"`
	}

	ok := jsonRes{
		OK: true,
	}

	app.WriteJSON(w, http.StatusOK, ok, "response")
	if err != nil {
		app.errorJSON(w, err)
		return
	}
}

func (app *Application) EditLapangan(w http.ResponseWriter, r *http.Request) {
	var payload LapanganPayload
	err := json.NewDecoder(r.Body).Decode(&payload)
	if err != nil {
		log.Println(err)
		app.errorJSON(w, err)
		return
	}
	var lapangan models.Lapangan

	id, _ := strconv.Atoi(payload.ID)
	SingleLapangan, _ := app.models.DB.Get(id)
	lapangan = *SingleLapangan

	lapangan.ID, _ = strconv.Atoi(payload.ID)
	lapangan.Title = payload.Title
	lapangan.Rating, _ = strconv.Atoi(payload.Rating)
	lapangan.Desc = payload.Desc

	//insert query lapangan
	err = app.models.DB.UpdateLapangan(lapangan)
	if err != nil {
		log.Println(err)
		app.errorJSON(w, err)
		return
	}

	type jsonRes struct {
		OK bool `json:"ok"`
	}

	ok := jsonRes{
		OK: true,
	}

	app.WriteJSON(w, http.StatusOK, ok, "response")
	if err != nil {
		app.errorJSON(w, err)
		return
	}
}

func (app *Application) DeleteLapangan(w http.ResponseWriter, r *http.Request) {
	var payload LapanganPayload
	err := json.NewDecoder(r.Body).Decode(&payload)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	id, _ := strconv.Atoi(payload.ID)
	err = app.models.DB.DeleteLapangan(id)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	type jsonRes struct {
		OK bool `json:"ok"`
	}

	ok := jsonRes{
		OK: true,
	}

	app.WriteJSON(w, http.StatusOK, ok, "response")
	if err != nil {
		app.errorJSON(w, err)
		return
	}
}
