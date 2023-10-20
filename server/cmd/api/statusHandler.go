package main

import (
	"ServerBook/models"
	"encoding/json"
	"net/http"
)

func (App *application) StatusHandler(w http.ResponseWriter, r *http.Request) {

	const Version = "1.0.0"

	currentStatus := models.AppStatus{
		Status:     "Online",
		Enviroment: App.config.Env,
		Version:    Version,
	}

	res, err := json.MarshalIndent(currentStatus, "", "\t")
	if err != nil {
		App.logger.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
