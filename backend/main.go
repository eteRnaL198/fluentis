package main

import (
	"fmt"

	"github.com/eteRnaL198/prasaku/rest"
	"github.com/joho/godotenv"
)

func init() {
	if err := godotenv.Load(); err != nil {
		fmt.Println("No .env file found")
	}
}

func main() {
	rest.StartServer()
}
