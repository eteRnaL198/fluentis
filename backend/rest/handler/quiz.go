package handler

import (
	"encoding/json"
	"net/http"

	"github.com/eteRnaL198/prasaku/service/quiz"
)

func QuizHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	quiz, err := quiz.FetchQuiz()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	response := map[string]string{
		"question": quiz.Question,
		"answer":   quiz.Answer,
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
