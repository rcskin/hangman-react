import React from "react";


const Popup = ({ message, setGameOver, setReset }) => {
  
  return (
    <div className="overlay">
        <div className="win-lose-popup">
            <div className="popup-message">{message}</div>
             <button className="popup-close-button" onClick={() => setGameOver(false)}>
                Close
             </button>
        </div>
    </div>
  );
};

export default Popup;


