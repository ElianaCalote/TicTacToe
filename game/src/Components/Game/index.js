import React, {useState} from 'react';
import { calculateWinner } from '../helpers';
import Board from '../Board';

export default function Game () {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

   function handleClick () {
    
   }

    return (
        <Board squares={board} onClick={handleClick}/>
    )
    
}
