import { useState } from 'react';
import Card from "./components/Card";
import './App.css';

function App() {
  // List of flashcards
  const cards = [
    { question: "What is the most powerful piece in chess?", answer: "The Queen" },
    { question: "How does a knight move?", answer: "In an L-shape" },
    { question: "What is castling?", answer: "A special move with the king and rook" },
    { question: "What is en passant?", answer: "A special pawn capture rule" },
    { question: "What is checkmate?", answer: "When the king has no escape and is attacked" }
  ];

  // State to track the current card index
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false); // Toggle between question/answer

  // Function to show next random card
  const nextCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cards.length);
    } while (newIndex === currentCardIndex); // Prevent same card appearing twice in a row
    setCurrentCardIndex(newIndex);
    setShowAnswer(false); // Reset to question side
  };

  return (
    <div className="app">
      <h1>Chess Flashcards</h1>
      <p>Understand chess pieces and techniques. Total Cards: {cards.length}</p>
      
       {/* Clicking the card toggles between question and answer  */}
      <div onClick={() => setShowAnswer(!showAnswer)}>
        <Card 
          question={cards[currentCardIndex].question} 
          answer={cards[currentCardIndex].answer}
          showAnswer={showAnswer} // Pass as prop
        />
      </div>

      {/* Button to show a new random card */}
      <button onClick={nextCard} className="next-btn">Next Card</button>
    </div>
  );
}

export default App;
