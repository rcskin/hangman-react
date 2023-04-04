import React, { useState } from "react";
import NewGame from "./NewGame";

function LetterButtons(props) {
  //define letters as a string
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-";

  //initialise the state variable using useState()
  const [disabledLetters, setDisabledLetters] = useState([]);

  //create handle function for when a letter button is clicked
  const handleSelect = (letter) => {
    //set state
    setDisabledLetters((prevState) => [...prevState, letter]); //spread operator creates new array with all elements of previous state as well as new letter element
    //pass selected letter to handle user's guess
    props.handleSelect(letter);
  };

  return (
    <div>
      {/* return an array of button elements - 1 for each of 'letters' */}
      {letters.split("").map((letter, i) => (
        <button
          className="letter-btn"
          onClick={() => handleSelect(letter)}
          key={i}
          value={letter}
          disabled={disabledLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
      <div>
        <NewGame
          setWrong={props.setWrong}
          setDisabledLetters={setDisabledLetters}
          setReset={props.setReset}
          reset={props.reset}
        />
      </div>
    </div>
  );
}

export default LetterButtons;

/* Note to reviewer:
Sources: https://medium.com/geekculture/using-prevstate-with-react-basic-and-complex-f7f8ab4ce1b6
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
https://legacy.reactjs.org/docs/state-and-lifecycle.html
*/
