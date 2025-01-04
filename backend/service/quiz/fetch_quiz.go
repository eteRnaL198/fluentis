package quiz

import (
	"context"
	"fmt"
	"os"
	"regexp"
	"strings"

	"github.com/google/generative-ai-go/genai"
	"google.golang.org/api/option"
)

func FetchQuiz() (*Quiz, error) {
	ctx := context.Background()
	client, err := genai.NewClient(ctx, option.WithAPIKey(os.Getenv("GEMINI_API_KEY")))
	if err != nil {
		return nil, err
	}
	defer client.Close()

	model := client.GenerativeModel("gemini-1.5-flash")
	resp, err := model.GenerateContent(
		ctx,
		genai.Text("Create a simple English sentence and its corresponding Japanese translation based on the following requirements:"),
		genai.Text("1. The English sentence should be simple and easy to understand, suitable for Japanese high school students."),
		genai.Text("2. The Japanese translation should accurately convey the meaning of the English sentence in a natural and conversational style."),
		genai.Text("3. Use various tenses (past, present, future), sentence types (affirmative, negative, interrogative), and grammatical patterns."),
		genai.Text("Generate only 1 question and the answer in the following format:"),
		genai.Text("Japanese: あいうえお。 English: abc."),
	)
	if err != nil {
		return nil, err
	}

	result := ""
	for _, cand := range resp.Candidates {
		if cand.Content == nil {
			continue
		}
		for _, part := range cand.Content.Parts {
			result = fmt.Sprintf("%v", part)
		}
	}

	re := regexp.MustCompile(`Japanese:.*?\n`)
	matches := re.FindString(result)
	question := strings.TrimSpace(strings.Replace(matches, "Japanese: ", "", 1))

	re = regexp.MustCompile(`English:.*?\n`)
	matches = re.FindString(result)
	answer := strings.TrimSpace(strings.Replace(matches, "English: ", "", 1))

	quiz := NewQuiz(question, answer)
	return quiz, nil
}
