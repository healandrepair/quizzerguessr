import { useState } from 'react';
import './App.css';
import Popup from './components/PopupModal';
import Question from './components/Question';
import React, {useEffect} from 'react'
import Banner from './components/Banner';

function CheckCombination(data, isFirstQ) {

  /// This is a model that is a placeholder to add the answers in. 
// This will (should) have security to prevent users from being able to read off the answers from the inspector. TO DO: Add an API that links and returns answers from a database

  var answers = {
    1: "6500",
    2: "1965",
  }

  console.log(data);

  if (isFirstQ === false) {
    console.log(data);
    return data === answers[2]
  }

  if (isFirstQ === true) {
    return data === answers[1]
  }
  return false;
}

// From stackoverflow, https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function App() {
  const [message, setMessage] = useState('');

  const [popUpIsOpen, setPopupToOpen] = useState(false);

  const [isCorrect, setFlagToCorrect] = useState(false);

  const [isFirstQ, setToFirstQ] = useState(false);

  const [buttonClicked, setButtonClicked] = useState(false); // New state variable

  const handleChange = event => {
    setMessage(event.target.value)
  }

  const handlePopup = () => {
    setPopupToOpen(!popUpIsOpen)
  }

  const handleInput = () => {
    var isTrue = CheckCombination(message, isFirstQ);
    if (isTrue) {
      setFlagToCorrect(true);
    }
    else {
      setFlagToCorrect(false);
    }
    
    setButtonClicked(true); // Update buttonClicked state
    handlePopup();
  }

  useEffect(() => {
    const randomValue = randomIntFromInterval(1, 2);
    setToFirstQ(randomValue === 1);
  }, []);

  return (
      

    <div className='app-background'>
          <div className="App">
      <header className="App-header">
        <Banner/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Combination GuessR
        </h1>

        <Question isFirstQ={isFirstQ}/>
        <form>
          <label style={{padding: 10}}>Enter a guess:</label>
          <br/>
          <input class="textBoxId" type="tel" style={{fontSize: 50}} id="guess" name="fname" maxLength={4} onChange={handleChange}/>
          <br/>
          <p>You will be guessing: {message}</p>
          <br/>
        </form>
        <input style={{fontSize: 50, padding: -10}}type="submit" onClick={handleInput} />

        {buttonClicked && (
        <Popup isOpen={popUpIsOpen} onClose={handlePopup} isCorrect={isCorrect} />
      )}

      </header>
    </div>
    </div>
  );
}

export default App;