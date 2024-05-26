"use client";
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const MathQuiz = () => {
  const { data: session } = useSession();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions([
      { text: '¿Cuál es la derivada de x^2?', correctAnswer: '2x', procedure: 'Para derivar x^2, utilizamos la regla de potencia: d/dx (x^n) = nx^(n-1).' },
      { text: '¿Cuál es la integral de 2x?', correctAnswer: 'x^2', procedure: 'Para integrar 2x, utilizamos la regla de potencia inversa: ∫ x^n dx = x^(n+1)/(n+1).' },
    ]);
  }, []);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [index]: { ...answers[index], [name]: value, correctAnswer: questions[index].correctAnswer, procedure: questions[index].procedure }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/submit', { answers, userId: session.user.id });
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting answers:', error);
      alert('Failed to submit answers');
    }
  };

  const showProcedure = (index) => {
    return submitted && answers[index] && answers[index].answer !== questions[index].correctAnswer;
  };

  if (!session) return <p className="text-center text-red-500">Please sign in to take the quiz.</p>;
  if (submitted) return <p className="text-center text-green-500">Thank you for your submission!</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{question.text}</h3>
          <input
            type="text"
            name="answer"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            onChange={(e) => handleChange(e, index)}
          />
          {showProcedure(index) && (
            <div className="mt-2 p-2 bg-gray-100 rounded-lg">
              <h4 className="font-semibold">Procedure</h4>
              <p>{question.procedure}</p>
            </div>
          )}
        </div>
      ))}
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Submit</button>
    </form>
  );
};

export default MathQuiz;
