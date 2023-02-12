import React from "react";

function GuessInput({ handleSubmitGuesses, status }) {
  const [tentativeGuess, setTentativeGuess] = React.useState([""]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ tentativeGuess });
    handleSubmitGuesses(tentativeGuess);
    setTentativeGuess("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          required
          disabled={status !== "running"}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          maxLength={5}
          type="text"
          value={tentativeGuess}
          onChange={(event) => {
            const newGuess = event.target.value.toUpperCase();
            setTentativeGuess(newGuess);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
