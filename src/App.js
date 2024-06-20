import { useState } from 'react';
import './App.css';
import Popup from './components/PopupModal';
import Question from './components/Question';
import React, {useEffect} from 'react'

function CheckCombination(data, questionNumber) {

  /// This is a model that is a placeholder to add the answers in. 
// This should have sort of security to prevent users from being able to read off the answers from the inspector lol. TO DO: Add connect this to an API that will returns answers, thus the true answer is not stored in the frontend

  var answers = {
    1: "fruit",
    2: "china",
    3: "koala",
    4: "elephant"
  }

  let answer = data.toString().toLowerCase();

  console.log(data);

  
  return answer === answers[questionNumber].toLowerCase();
}

// From stackoverflow, https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function App() {
  const [message, setMessage] = useState('');

  const [popUpIsOpen, setPopupToOpen] = useState(false);

  const [isCorrect, setFlagToCorrect] = useState(false);

  const [questionNumber, setQuestionNumber] = useState(1);

  const [buttonClicked, setButtonClicked] = useState(false); // New state variable

  const [attempts, setAttemptsCount] = useState(0);

  const handleChange = event => {
    setMessage(event.target.value)
  }

  const handlePopup = () => {
    setPopupToOpen(!popUpIsOpen)
  }

  const handleInput = () => {
    var isTrue = CheckCombination(message, questionNumber);
    if (isTrue) {
      setFlagToCorrect(true);
    }
    else {
      setFlagToCorrect(false);
    }
    
    setButtonClicked(true); // Update buttonClicked state, enables modal to popup
    setAttemptsCount(attempts + 1); // Set the number of tries after button press
    handlePopup();
  }

  useEffect(() => {
    const randomValue = randomIntFromInterval(1, 4);
    setQuestionNumber(randomValue);
  }, []);

  return (
      

    <div className='app-background'>
          <div className="App">
      <header className="App-header">
        <h1>
          Quizzer GuessR
        </h1>

        <Question questionNumber={questionNumber}/>
        <form>
          <label style={{padding: 10}}>Enter a guess:</label>
          <br/>
          <input class="textBoxId" type="text" style={{fontSize: 50}} id="guess" name="fname" maxLength={50} onChange={handleChange}/>
          <br/>
          <p>You will be guessing: {message}</p>
          <p>Number of tries: {attempts}</p>
           {/* spacing is odd here, cant add anymore elements otherwise black bars at bottom will show up, will need to be fixed later */}
        </form>
        <input style={{fontSize: 50, padding: -10}}type="submit" onClick={handleInput} value="Submit"/>
        {buttonClicked && (
        <Popup isOpen={popUpIsOpen} onClose={handlePopup} isCorrect={isCorrect} attempts={attempts} />
      )}

      </header>
    </div>
    </div>
  );
}

export default App;