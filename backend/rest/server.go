package rest

import (
	"fmt"
	"log"
	"net/http"
)

func StartServer() {
	handler := NewHandler()
	fmt.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
