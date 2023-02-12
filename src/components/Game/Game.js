import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  function handleSubmitGuesses(tentativeGuess) {
    const nextGuess = {
      guess: tentativeGuess,
      id: `${tentativeGuess}-${Math.random()}`,
    };
    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setStatus("won");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput status={status} handleSubmitGuesses={handleSubmitGuesses} />
      {status === "won" && (
        <WonBanner status={status} numOfGuesses={guesses.length} />
      )}
      {status === "lost" && <LostBanner status={status} answer={answer} />}
    </>
  );
}

export default Game;
