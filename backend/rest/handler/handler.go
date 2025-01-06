package handler

import (
	"net/http"

	"github.com/rs/cors"
)

func NewHandler() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/v1/quizzes", QuizHandler)
	handler := cors.Default().Handler(mux)
	return handler
}
