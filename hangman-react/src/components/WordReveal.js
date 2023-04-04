import React, { useState, useEffect } from "react";
import Dictionary from "../dictionary.txt";
import Diagram from "./Diagram";
import LetterButtons from "./LetterButtons";

const WordReveal = () => {
  //create state variables and set initial values
  const [word, setWord] = useState("");
  const [letters, setLetters] = useState([]);
  const [wrong, setWrong] = useState(0);
  let [reset, setReset] = useState(false);

  //create handle function for letters/guesses
  const handleSelect = (letter) => {
    //create a copy of the 'letters' array
    const newLetters = [...letters];
    //check each letter of the 'word' to see if it matches the selected letter from user
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        //if letter matches, replace the "_ " in the letters array with actual letter
        newLetters[i] = letter;
      }
    }

    //Check if the selected letter is NOT in the 'word'
    if (!word.includes(letter)) {
      //if it isn't, increment the 'wrong' count by 1
      let count = wrong + 1;
      //Update the state of wrong count
      setWrong(count);
    }
      //check if 'wrong' count is equal to 9, meaning user has made 10 wrong guesses
      if (wrong === 9) {
        //If so, display an alert to inform the player they have lost
        alert(
          `You lose! You have guessed too many times! The word you were looking for was: ${word}`
        );
      }
    
    //Update the state of the 'letters' array with the new value that includes the selected letter
    setLetters(newLetters);

    //check if the 'letters' array contains any '_ ' characters
    if (!newLetters.includes("_ ")) {
      //If it does NOT, all letters have been guessed and the user has won
      //alert user
      alert("You win! Well done!");
    }
  };

  useEffect(() => {
    //fetch the words of the dictionary.txt file
    fetch(Dictionary)
      //convert the response to text
      .then((response) => response.text())
      .then((text) => {
        //split into an array of words
        const words = text.split("\n");

        //select a random index from the array
        const randomIndex = Math.floor(Math.random() * words.length);
        //get the word from the random index, convert to uppercase to match the letters, trim any whitespaces at start/end of word
        const randomWord = words[randomIndex].toUpperCase().trim();
        //set state of the 'word' variable to the random word selected
        setWord(randomWord);

        //split the random word into separate letters
        const wordLetters = randomWord.split("");
        setLetters(wordLetters.map(() => "_ "));
      })
      .catch((error) => console.error(error));
  }, [reset]);

  return (
    <div>
      <div className="images-container">
        <Diagram wrong={wrong} />
        <p>
          <i>You have made {wrong} / 10 wrong guesses!</i>
        </p>
        <div className="word-reveal">
          {/* Display each individual letter conditionally based on whether it has been guessed or not */}
          <div className="letters-display">
            {letters.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </div>
          <div className="letters-container">
            <LetterButtons
              letters={letters}
              handleSelect={handleSelect}
              setWrong={setWrong}
              setReset={setReset}
              reset={reset}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordReveal;

/* Note to reveiwer:
I received some help with how to pass props from a mentor call, specifically how to 
make certain components 'parent' to other components and how to use props for 'ancestors' 
(my NewGame component). 
I also used other sources outlined on other component pages and well as learning from 
previous tasks and their sources.
I also wanted an alert to pop up for the user so that they could not have functionality of what was
behind them (the game) without pressing ok to the alert.
All components are formatted with Prettier */
