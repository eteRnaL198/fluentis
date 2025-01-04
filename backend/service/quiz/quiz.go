package quiz

type Quiz struct {
	Question string `json:"japanese"`
	Answer   string `json:"english"`
}

func NewQuiz(question, answer string) *Quiz {
	return &Quiz{
		Question: question,
		Answer:   answer,
	}
}
