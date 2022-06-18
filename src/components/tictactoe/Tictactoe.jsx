import React, { useState } from 'react';
import {Container} from '../container/Container';
import Board from './Board';
import Info from './Info';

const Tictactoe = () => {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState('');
  const resetBoard = () => {
    setReset(true);
  };

  return (
    <Container title="Tic Tac Toe" description="Create simple Tic Tac Toe Game">
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        <div className="winnerText grid grid-cols-3 justify-between items-end">
          {winner}
          <button
            onClick={() => resetBoard()}
            className="bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg mt-10 hover:bg-blue-500 col-start-3 col-end-4"
          >
            Reset Board
          </button>
        </div>
      </div>
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
      <Info />
    </Container>
  )
}

export default Tictactoe