package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()
	// needed only for development
	// we will run our application on the same server in prod
	app.Use(cors.New())

	app.Get("/", index)
	app.Get("/api/v1/quizzes", getQuizzes)

	app.Listen(":3000")
}

func index(c *fiber.Ctx) error {
	return c.SendString("Hello, World!")
}

func getQuizzes(c *fiber.Ctx) error {
	list := []map[string]any{
		{
			"test": 123,
		},
	}
	return c.JSON(list)
}
