import type { CellValue } from "../utils/game";

type CellProps = {
  value: CellValue;
  onClick: () => void;
  isWinning: boolean;
};

export default function Cell({ value, onClick, isWinning }: CellProps) {
  return (
    <button className={`cell ${isWinning ? "win" : ""}`} onClick={onClick}>
      {value}
    </button>
  );
}
