import React from 'react';
import Square from '../Square';
import "./board.css"

export default function Board ({squares, onClick}) {
    return(
           <div className="game-board">
           {squares.map((square, i) => {
               return <Square key={i} value={square} onClick={() => onClick((console.log("testing click")))} />
           })}
           </div>
    )
    
}

            // {/* <Square  value="1"  onClick={() => onClick(console.log("one"))}/>
            // <Square  value="2"  onClick={() => onClick("dummy value")}/>
            // <Square  value="3"  onClick={() => onClick("dummy value")}/>
            // <Square  value="4"  onClick={() => onClick("dummy value")}/>
            // <Square  value="5"  onClick={() => onClick("dummy value")}/>
            // <Square  value="6"  onClick={() => onClick("dummy value")}/>
            // <Square  value="7"  onClick={() => onClick("dummy value")}/>
            // <Square  value="8"  onClick={() => onClick("dummy value")}/>
            // <Square  value="9"  onClick={() => onClick("dummy value")}/> */}
