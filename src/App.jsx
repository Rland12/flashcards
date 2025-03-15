import { useState } from 'react';
import * as fuzz from 'fuzzball';
import Card from "./components/Card";
import './App.css';

function App() {
  // List of flashcards
  const cards = [
    { question: "What piece moves in an L shape?", answer: "Knight" },
    { question: "What is the most powerful piece?", answer: "Queen" },
    { question: "Which piece moves diagonally?", answer: "Bishop" }

  ];

  // State to track the current card index
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false); // Toggle between question/answer
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState("");

   // Function to handle guess submission
   const handleSubmit = () => {
    const correctAnswer = cards[currentCardIndex].answer.toLowerCase().trim();
    const guess = userGuess.toLowerCase().trim();

     // Use fuzzy matching with a threshold (e.g., 80 for good similarity)
     const similarity = fuzz.ratio(guess, correctAnswer);

     if (similarity >= 80) {
       setFeedback("✅ Correct!");
       setShowAnswer(true);
     } else {
       setFeedback("❌ Incorrect! Try again.");
     }
  };

  // Move to next card
  const handleNext = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      resetState();
    }
  };

  // Move to previous card
  const handleBack = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      resetState();
    }
  };

  // Reset state when switching cards
  const resetState = () => {
    setShowAnswer(false);
    setUserGuess("");
    setFeedback("");
  };

  return (
    <div className="app">
     <h1>Chess Flashcards</h1>
      <p>Learn chess pieces and techniques!</p>
      <Card 
        question={cards[currentCardIndex].question} 
        answer={cards[currentCardIndex].answer}
        showAnswer={showAnswer} 
      />
      
      {/* User input for guessing */}
      {!showAnswer && (
        <div className="input-container">
          <input 
            type="text" 
            placeholder="Enter your answer..." 
            value={userGuess} 
            onChange={(e) => setUserGuess(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      
      
      {/* Feedback */}
      <p className="feedback">{feedback}</p>

      {/* Navigation buttons */}
      <div className="nav-buttons">
        <button onClick={handleBack} disabled={currentCardIndex === 0}>Back</button>
        <button onClick={handleNext} disabled={currentCardIndex === cards.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default App;
