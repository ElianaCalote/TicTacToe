import React, {useState} from 'react';
import { calculateWinner } from '../helpers';
import Board from '../Board';
import "./game.css"

export default function Game () {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

   function handleClick (i) {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
	// Put an X or an O in the clicked square
	boardCopy[i] = xIsNext ? 'x' : 'o';
	setBoard(boardCopy);
	setXisNext(!xIsNext);
    };

    function renderMoves () {
        return <button onClick={() => setBoard(Array(9).fill(null))}>
        Start Game
        </button>
    }
   

    return (
        <>
        <Board squares={board} onClick={handleClick}/>
        <div className='symbol'>
        <p>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</p>
        {renderMoves()}
        </div>
        </>
    )
    
}
