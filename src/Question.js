import React from 'react';

const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="question">
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
