import type { CellValue } from "../utils/game";

type CellProps = {
  value: CellValue;
  onClick: () => void;
  isWinning: boolean;
  disabled?: boolean;
  ariaLabel?: string;
};

export default function Cell({ value, onClick, isWinning, disabled, ariaLabel }: CellProps) {
  return (
    <button className={`cell ${isWinning ? "win" : ""}`} 
    onClick={onClick} 
    disabled={disabled} 
    aria-label={ariaLabel}>
      {value}
    </button>
  );
}
