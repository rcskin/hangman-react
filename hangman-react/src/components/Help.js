import React, { useState } from "react";

const Help = () => {
  //Create a state variable to change visibility of a popup
  const [isOpen, setIsOpen] = useState(false);

  //create handle functon to handle Help Button click event
  const handleOpen = () => {
    //set isOpen to true to display the popup
    setIsOpen(true);
  };

  //create handle function to handle the Close button click event
  const handleClose = () => {
    //set isOpen to false
    setIsOpen(false);
  };

  return (
    <div>
      {/* create a help button */}
      <button className="help-button" onClick={handleOpen}>
        Help!
      </button>
      {isOpen && (
        <div className="overlay">
          <div className="help-popup">
            <div className="popup-header">
              <h2>Hangman Help</h2>
              {/* Add a handle function to the Close button. */}
              <h2 onClick={handleClose}>Close</h2>
            </div>
            <div className="popup-content">
              {/* Add the content of the popup. */}
              <p>The game is simple!</p>
              <p>
                First, click one of the letter buttons you see to select the
                letter for your guess. If you are correct, the letter with
                reveal itself where the word will be displayed.
              </p>
              <p>
                If you are incorrect, the letter will be displayed to the left
                as a wrong letter, and an image will appear on the main display.
                The images will build a pole and noose, and then build a person
                including a head, body, arms, and legs.
              </p>
              <p>
                You can continue guessing letters until you have guessed the
                entire word correctly, or until you have built the entire
                hangman, at which point you lose.
              </p>
              <p>You can press New Game at any point to start again.</p>
              <p>Have fun!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;

/* Note to reviewer:
I used the following sources to help understand how to make a popup in React and how to style it
Sources: https://www.w3schools.com/howto/howto_css_modals.asp
https://www.youtube.com/watch?v=1-hZg_6vqqw
*/
