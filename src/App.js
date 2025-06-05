import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Question from './Question';
import Score from './Score';
import HowTo from './HowTo';

// Set list of quiz questions and answers
const questions = [
  {
    question: "Who is Luke Skywalker's father?",
    options: ["Darth Vader", "Obi-Wan Kenobi", "Yoda", "Han Solo"],
    correctAnswer: "Darth Vader",
  },
  {
    question: "What is the name of Han Solo's ship?",
    options: ["Millennium Falcon", "TIE Fighter", "X-Wing", "Slave I"],
    correctAnswer: "Millennium Falcon",
  },
  {
    question: "Who trained Obi Wan Kenobi?",
    options: ["Anakin Skywalker", "Qui Gon Gin", "Mace Windu", "Master Yoda"],
    correctAnswer: "Qui Gon Gin",
  },
  {
    question: "Which Clone Battalion did Anakin Skywalker lead during the attack on the Jedi Temple?",
    options: ["The 612th", "The 18th", "The 501st", "The 442nd"],
    correctAnswer: "The 501st",
  },
  {
    question: "Which planet did Princess Leia grow up on?",
    options: ["Endor", "Hoth", "Tatooine", "Alderaan"],
    correctAnswer: "Alderaan",
  },
];

const App = () => {
  // Tracks current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Tracks the users score
  const [score, setScore] = useState(0);
  // Flag to check if quiz is completed
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Handles logic when an answer is selected
  const handleAnswer = (selectedOption) => {
    // Increase score if correct answer selected
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question or finish quiz
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  // Resets quiz state to start over
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">How to Use</Link> | <Link to="/quiz">Quiz</Link>
        </nav>

        <Routes>
    <Route path="/" element={<HowTo />} />


  <Route
    path="/quiz"
    element={
      <>
        <h1>Star Wars Quiz</h1>
        {quizCompleted ? ( 
          <div>
            <Score score={score} totalQuestions={questions.length} />
            <button onClick={resetQuiz}>Restart Quiz</button>
          </div> // Show final score and restart button if quiz is completed
        ) : (
          <Question // Show current question 
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            onAnswer={handleAnswer}
          />
        )}
      </>
    }
  />
</Routes>
      </div>
    </Router>
  );
};

export default App;

