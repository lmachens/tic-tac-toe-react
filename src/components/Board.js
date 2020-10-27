import "./board.css";
import React, { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../utils/game";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState("🐷");

  const winner = calculateWinner(squares);

  function handleClick(index) {
    if (winner) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = nextPlayer;
    setSquares(newSquares);
    setNextPlayer(nextPlayer === "🐷" ? "🐶" : "🐷");
  }

  function renderSquare(index) {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  }

  const status = winner ? `Winner: ${winner}` : `Next player: ${nextPlayer}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
