import React from 'react';

function Card({ question, answer, showAnswer }) {
  return (
    <div className='card-container'>
      <div className={`card-inner ${showAnswer ? 'flipped' : ''}`}>
        <div className='question'>
          <p>{question}</p>
        </div>
        <div className='answer'>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
