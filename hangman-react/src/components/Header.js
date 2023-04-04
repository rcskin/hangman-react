import React from "react";

const Header = () => {
  return (
    <div className="hangman-header">
      {/* Title to look like hangman game - see source below*/}
      <h1>
        {" "}
        <span>H</span> <span>A</span> <span>N</span> <span>G</span>{" "}
        <span>M</span> <span>A</span> <span>N</span>
      </h1>

      <p>Guess a letter to find the mystery word!</p>
    </div>
  );
};

export default Header;

/*Note to reviewer:
I used rafce from extension to create a functional react component quickly and easily 
Source: https://www.youtube.com/watch?v=jj0W8tYX_q8 
For the title - I wanted underlining on individual letters, but CSS doesn't have an 
option for that, so I used the following source which recommends wrapping
everything you want underlined in its own span element, and then applying the text-decoration
CSS on those span elements. Source: https://css-tricks.com/snippets/jquery/underline-individual-words/#:~:text=There%20is%20no%20CSS%20for,apply%20underline%20to%20those%20spans.
*/
