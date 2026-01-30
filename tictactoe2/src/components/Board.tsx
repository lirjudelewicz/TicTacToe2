

type BoardProps = {
  board: string[];
};

export default function Board({board}: BoardProps) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      {board.map((value, idx) => (
        <button
        className="cell"
          key={idx}
          value={value}
        />
      ))}
    </div>
  );
}
