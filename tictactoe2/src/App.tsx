import { useState } from 'react'
import './App.css'
import Board from './components/Board';

const EMPTY_BOARD: string[] = Array(9).fill(null);

function App() {
  const [board, setBoard] = useState<string[]>(EMPTY_BOARD);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Tic-Tac-Toe</h1>

        <div className="status" aria-live="polite">
          {status}
        </div>
        <Board board={board} />
      </div>
    </div>
  );
}

export default App
