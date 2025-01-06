package rest

import (
	"fmt"
	"log"
	"net/http"

	"github.com/eteRnaL198/prasaku/rest/handler"
)

func StartServer() {
	handler := handler.NewHandler()
	fmt.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
