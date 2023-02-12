import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const classname = status ? `cell ${status}` : "cell";
  return <span className={classname}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <>
      <p className="guess">
        {range(5).map((num) => {
          return (
            <Cell
              key={num}
              letter={result ? result[num].letter : undefined}
              status={result ? result[num].status : undefined}
            />
          );
        })}
      </p>
    </>
  );
}

export default Guess;
