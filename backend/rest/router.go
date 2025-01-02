package rest

import (
	"net/http"

	"github.com/eteRnaL198/prasaku/rest/handler"
)

func NewRouter() *http.ServeMux {
	router := http.NewServeMux()
	router.HandleFunc("/quizzes", handler.QuizHandler)
	return router
}
