package main

import (
    "log"
    "net/http"
    "encoding/json"
    "github.com/gorilla/mux"
)

func homePage(w http.ResponseWriter, r *http.Request){
    vars := mux.Vars(r)
    name := vars["name"]
    response := map[string]string{"message": "Hello World " + name + "!"}
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response)
}

func handleRequests() {
    r := mux.NewRouter()
    r.HandleFunc("/hello/{name}", homePage)
    log.Fatal(http.ListenAndServe(":10000", r))
}

func main() {
    handleRequests()
}