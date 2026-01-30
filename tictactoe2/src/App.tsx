import { useMemo, useState } from 'react'
import './App.css'
import Board from './components/Board';
import { calculateWinner, type CellValue } from './utils/game';

const createEmptyBoard = (): CellValue[] => Array(9).fill(null);

function App() {
  const [board, setBoard] = useState<CellValue[]>(createEmptyBoard());
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const { winner, line } = useMemo(() => calculateWinner(board), [board]);

  const isDraw = winner === null && board.every((c) => c !== null);
  const gameOver = winner !== null || isDraw;


  const status = winner !== null
    ? `Winner: ${winner}`
    : isDraw
      ? "Draw!"
      : `Next turn: ${xIsNext ? "X" : "O"}`;

  console.log('game status:', { board, winner, line, isDraw, status, xIsNext });

  function handleCellClick(index: number) {
    if (gameOver || board[index]) return;

    const nextBoard = board.slice();
    nextBoard[index] = xIsNext ? "X" : "O";

    setBoard(nextBoard);
    setXIsNext((prev) => !prev);
  }
  function restartGame() {
    setBoard(createEmptyBoard());
    setXIsNext(true);
  }

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Tic-Tac-Toe</h1>

        <div className="status" aria-live="polite">
          {status}
        </div>
          <Board board={board} onCellClick={handleCellClick} winningLine={line} isGameOver={gameOver}  />
          <button className="restart" onClick={restartGame}>
            Restart Game
          </button>
      </div>
    </div>
  );
}

export default App
