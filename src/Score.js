import React from 'react';

// Component to display the final score after quiz completion
const Score = ({ score, totalQuestions }) => {
  return (
    <div className="score-container">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {totalQuestions}</p>
    </div>
  );
};

export default Score;