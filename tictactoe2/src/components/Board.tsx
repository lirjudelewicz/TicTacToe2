import Cell from "./Cell";
import type { CellValue } from "../utils/game";


type BoardProps = {
  board: CellValue[];
  onCellClick: (index: number) => void;
  winningLine: number[];
};

export default function Board({ board, onCellClick, winningLine }: BoardProps) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      {board.map((value, idx) => (
        <Cell
          key={idx}
          value={value}
          onClick={() => onCellClick(idx)}
          isWinning={winningLine.includes(idx)}
        />
      ))}
    </div>
  );
}
