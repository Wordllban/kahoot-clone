package collection

import (
	"context"
	"server/internal/entity"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

type QuizCollection struct {
	collection *mongo.Collection
}

func (c QuizCollection) InsertQuiz(quiz entity.Quiz) error {
	_, err := c.collection.InsertOne(context.Background(), quiz)
	return err
}

func (c QuizCollection) GetQuizById(id primitive.ObjectID) (*entity.Quiz, error) {
	result := c.collection.FindOne(context.Background(), bson.M{"_id": id})

	var quiz entity.Quiz
	err := result.Decode(&quiz)
	if err != nil {
		return nil, err
	}

	return &quiz, nil
}

func (c QuizCollection) GetQuizzes() ([]entity.Quiz, error) {
	cursor, err := c.collection.Find(context.Background(), bson.M{})
	if err != nil {
		return nil, err
	}

	var quiz []entity.Quiz
	err = cursor.Decode(&quiz)
	if err != nil {
		return nil, err
	}

	return quiz, nil
}
