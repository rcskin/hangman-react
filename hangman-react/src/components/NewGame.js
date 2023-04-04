import React from "react";

//create a NewGame function to reset state values for New Game button using props
function NewGame(props) {
  //handle function that is called when button is clicked
  const handleOnClick = () => {
    //call setWrong function passed down as a prop with 0 to reset wrong guesses value
    props.setWrong(0);
    //call setDisabledLetters function passed down as a prop with an empty array to reset the disabled letter buttons
    props.setDisabledLetters([]);
    //call setReset function pass down as a prop with the opposite of the current reset state (false to true) to reset the game
    props.setReset(!props.reset);
  };

  return (
    <div>
      {/* New Game button that calls handle function to restart game when clicked*/}
      <button onClick={handleOnClick}>New Game!</button>
    </div>
  );
}

export default NewGame;

/* Note to reviewer: 
This was one section where I needed help from my mentor call to understand 
passing props from parent and ancestor to reset the game */
