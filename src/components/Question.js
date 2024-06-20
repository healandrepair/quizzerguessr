function Question({ questionNumber }) {
    const questions = {
      1: "Are tomatoes 🍅 a fruit or vegetable?",
      2: "Which country invented ice-cream? 🍦",
      3: "Which animal sleeps the most?",
      4: "What is the largest land animal?"
    };
  
    return (
      <div>
        <h2>{questions[questionNumber]}</h2>
      </div>
    );
  }

export default Question;