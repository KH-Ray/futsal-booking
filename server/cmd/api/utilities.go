package main

import (
	"encoding/json"
	"net/http"
)

func (App *application) WriteJSON(w http.ResponseWriter, status int, data interface{}, wrap string) error {
	wrapper := make(map[string]interface{})

	wrapper[wrap] = data

	res, err := json.Marshal(wrapper)
	if err != nil {
		App.logger.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)

	return nil
}
