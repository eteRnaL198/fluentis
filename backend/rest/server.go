package rest

import (
	"fmt"
	"log"
	"net/http"
)

func StartServer() {
	router := NewRouter()
	fmt.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
