package service

import (
	"server/internal/collection"
	"server/internal/entity"
)

type QuizService struct {
	quizCollection *collection.QuizCollection
}

func Quiz(quizCollection *collection.QuizCollection) QuizService {
	return QuizService{
		quizCollection: quizCollection,
	}
}

func (s QuizService) GetQuizzes() ([]entity.Quiz, error) {
	return s.quizCollection.GetQuizzes()
}
