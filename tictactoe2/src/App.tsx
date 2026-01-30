import { useMemo, useState } from 'react'
import './App.css'
import Board from './components/Board';
import { calculateWinner, type CellValue } from './utils/game';

const EMPTY_BOARD: CellValue[] = Array(9).fill(null);

function App() {
  const [board, setBoard] = useState<CellValue[]>(EMPTY_BOARD);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const { winner, line } = useMemo(() => calculateWinner(board), [board]);
  const isDraw = !winner && board.every((c) => c !== null);

  const status = winner
    ? `Winner: ${winner}`
    : isDraw
      ? "Draw!"
      : `Next turn: ${xIsNext ? "X" : "O"}`;

  function handleCellClick(index: number) {
    if (winner || isDraw || board[index]) return;

    const nextBoard = board.slice();
    nextBoard[index] = xIsNext ? "X" : "O";

    setBoard(nextBoard);
    setXIsNext((prev) => !prev);
  }

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Tic-Tac-Toe</h1>

        <div className="status" aria-live="polite">
          {status}
        </div>
        <Board board={board} onCellClick={handleCellClick} winningLine={line} />
      </div>
    </div>
  );
}

export default App
