import React from "react";
import Image0 from "../images/state1.GIF";
import Image1 from "../images/state2.GIF";
import Image2 from "../images/state3.GIF";
import Image3 from "../images/state4.GIF";
import Image4 from "../images/state5.GIF";
import Image5 from "../images/state6.GIF";
import Image6 from "../images/state7.GIF";
import Image7 from "../images/state8.GIF";
import Image8 from "../images/state9.GIF";
import Image9 from "../images/state10.gif";
import Image10 from "../images/state11.GIF";

function Diagram(props) {
  //create an array of images provided from task
  const imagesArray = [
    Image0,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
  ];

  return (
    <div>
      {/* display images using props from wrong guesses; hard code height and width here instead of CSS*/}
      <img
        src={imagesArray[props.wrong]}
        alt="img"
        height="300px"
        width="200px"
      />
    </div>
  );
}

export default Diagram;
