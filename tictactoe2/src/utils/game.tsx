export type Player = "X" | "O";
export type CellValue = Player | null;

export type WinnerResult =
  | { winner: Player; line: number[] }
  | { winner: null; line: number[] };

export function calculateWinner(board: CellValue[]): WinnerResult {
  const lines: number[][] = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    const v = board[a];
    if (v && v === board[b] && v === board[c]) {
      return { winner: v, line: [a, b, c] };
    }
  }

  return { winner: null, line: [] };
}
