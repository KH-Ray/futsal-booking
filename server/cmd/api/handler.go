package main

import (
	"ServerBook/models"
	"errors"
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

func (App *application) GetLapangan(w http.ResponseWriter, r *http.Request) {
	params := httprouter.ParamsFromContext(r.Context())

	id, err := strconv.Atoi(params.ByName("id"))
	if err != nil {
		App.logger.Print(errors.New("invalid id parameter"))
	}

	/* 	app.logger.Println("id :", id) */

	lapangan := models.Lapangan{
		ID:     id,
		Title:  "",
		Desc:   "",
		Rating: 5,
	}
	err = App.WriteJSON(w, http.StatusOK, lapangan, "Lapangan")
}
