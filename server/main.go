package main

import "github.com/gofiber/fiber/v2"

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
	app.Get("/api/v1/quizzes", getQuizzes)

	app.Listen(":3000")
}

func getQuizzes(c *fiber.Ctx) error {
	list := []map[string]any{
		{
			"test": 123,
		},
	}
	return c.JSON(list)
}
