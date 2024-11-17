import type { Quiz } from "../models/quiz";

export class ApiService {
  baseUrl: string = `${import.meta.env.VITE_BASE_API_URL}/api`;

  async getQuizById(quizId: string): Promise<Quiz | null> {
    const response = await fetch(`${this.baseUrl}/quizzes/${quizId}`);
    if (!response.ok) {
      return null;
    }

    const json = await response.json();
    return json;
  }

  async getQuizzes(): Promise<Quiz[]> {
    const response = await fetch(`${this.baseUrl}/quizzes`);
    if (!response.ok) {
      alert("Failed to fetch quizzes!");
      return [];
    }

    const json = await response.json();
    return json;
  }

  async saveQuiz(quizId: string, quiz: Quiz) {
    const response = await fetch(`${this.baseUrl}/quizzes/${quizId}`, {
      method: "PUT",
      body: JSON.stringify(quiz),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      alert("Failed to save quiz!");
    }
  }
}

export const apiService = new ApiService();
