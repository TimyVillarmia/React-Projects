import { useState } from 'react';
import Tile from './Tile';

export default function Board() {

    // each index represents each tile
    // [null,null,null,null,null,null,null,null,null,]
    const [value, setValue] = useState(Array(9).fill(null));

    // States for Switching Turns
    const [isXNext, setXNext] = useState(true);

    const handleClick = ((tileIndex) => {
        // Creates a shallow copy
        const nextSquares = value.slice();

        // check if tile is already clicked
        // for avoiding overwriting
        if (nextSquares[tileIndex]) {
            return; 
        }

        // switching turns between X and O
        // True: X and False: O
        if (isXNext) {
            nextSquares[tileIndex] = 'X';
        } else {
            nextSquares[tileIndex] = 'O';
        }

        // Update Turns
        setXNext(!isXNext);
        // Update nextSquares Array
        setValue(nextSquares);
    })

    function DecideWinnner(squares) {

        const winningCombination = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];



    }

    return (
        <>
        <div className="status">
            <p>Current Player: <span>{isXNext ? 'X' : 'O'}</span></p>
        </div>
        <div className="board">
            <div className="board-row">
                <Tile value={value[0]} onTileClick={() => handleClick(0)}/>
                <Tile value={value[1]} onTileClick={() => handleClick(1)}/>
                <Tile value={value[2]} onTileClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Tile value={value[3]} onTileClick={() => handleClick(3)}/>
                <Tile value={value[4]} onTileClick={() => handleClick(4)}/>
                <Tile value={value[5]} onTileClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Tile value={value[6]} onTileClick={() => handleClick(6)}/>
                <Tile value={value[7]} onTileClick={() => handleClick(7)}/>
                <Tile value={value[8]} onTileClick={() => handleClick(8)}/>
            </div>
        </div>
        
        </>
    )
}