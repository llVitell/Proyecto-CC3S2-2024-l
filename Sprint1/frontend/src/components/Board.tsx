import React, { useState } from 'react';
import { PieceString } from '../utils/types';
import { BOARD_SIZE, initializeBoard } from '../utils/constants';
import PieceDiv from './Piece';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useBoard } from '../hooks/useBoard';

const Board: React.FC = () => {
    const useBoardHook = useBoard();
    const {boardObj, 
        //board, selectedPiece, validMoves, turnOwner, 
        capturedPiecesCounter, winnerPlayer, setBoard, setSelectedPiece,
        setValidMoves,
        setTurnOwner,
        setCapturedPiecesCounter,
        setWinnerPlayer} = useBoardHook;
    
    //const oppositePlayer = (currentPlayer: PieceString) => (currentPlayer === "red") ? "black" : "red";
    
    const navigate = useNavigate()

    const handleIsStillTheMatch = (rowIndex: number, colIndex: number) => {
        /*
        if (winnerPlayer === "none") {
            handleSquareClick(rowIndex, colIndex);
        }
        */
       useBoardHook.handleIsStillTheMatch(rowIndex, colIndex);
    }

    // functions
    const handleLogOut = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data.message)
                navigate('/')
            }
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    const handleSendStatsToThisUserAndResetGame = (winner: PieceString) => {
        // funciones de registro de victoria
        if (winner !== "none") {
            console.log("winner = ", winner);
            console.log("se registran datos en el servidor");
        }
        
        // reset
        setBoard(initializeBoard());
        setCapturedPiecesCounter({red: 0, black: 0});
        setSelectedPiece(null);
        setValidMoves([]);
        setTurnOwner('red');
        setWinnerPlayer('none');
    }

    return (
        <>
            <header className="shadow-md w-full">
                <nav className="flex items-center justify-between bg-white py-3 nr:px-10 px-7">
                    <div className='text-2xl flex items-center text-gray-800 font-bold'>Juego de Damas</div>
                    <Button onClick={handleLogOut} text='Log Out'></Button>
                </nav>
            </header>
            <main className='flex flex-col justify-center items-center mt-2'>
                <section className='text-xl my-6'>
                    <div className='font-bold'>Current Stats:</div>
                    <div>{`Red: ${capturedPiecesCounter.red} - Black: ${capturedPiecesCounter.black}`}</div>
                    <div>{(boardObj.getTurnOwner()!=="none") ? `Turn: ${boardObj.getTurnOwner() === "red" ? "Red" : "Black"}` : "Partida Terminada"}</div>
                </section>
                <div className="flex flex-col border-4 border-gray-700">
                    {
                    //board
                    boardObj.getGrid()
                    .map((row, rowIndex) => (
                        <div className="flex" key={rowIndex}>
                            {row.map((piece, colIndex) => (
                                <div className={`${colIndex % 2 === rowIndex % 2 ? "bg-[#2c3b4b]" : "bg-[#ebebff]"}  
                                flex justify-center items-center
                                    xs:w-6 xs:h-6
                                    w-10 h-10
                                    md:w-12 md:h-12
                                    lg:w-16 lg:h-16            
                                `}
                                    key={`${rowIndex}-${colIndex}`}
                                    onClick={
                                        () => handleIsStillTheMatch(rowIndex, colIndex)
                                    //    () => handleSquareClick(rowIndex, colIndex)
                                    }
                                    style={{
                                        //backgroundColor: validMoves.some(move => move.row === rowIndex && move.col === colIndex) ? '#9ACD32' : '',
                                        backgroundColor: boardObj.getValidMoves().some(move => move.row === rowIndex && move.col === colIndex) ? '#9ACD32' : '',
                                    }}
                                >
                                    {
                                        piece.getColor() !== "none"
                                            ? <PieceDiv pieceInfo={piece} />
                                            : null
                                    }
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <section className='text-xl mt-6'>
                    <div className=''>{`Winner: ${winnerPlayer !== "none" ? winnerPlayer : 'Not yet'}`}</div>
                    {
                        (winnerPlayer !== "none")
                        ? <div className='my-2 text-green-600'>Please press reset to iniciate other game</div>
                        : null
                    }
                    <button onClick={() => handleSendStatsToThisUserAndResetGame(winnerPlayer)} className='mt-2 text-blue-400 border-4 py-1.5 px-3 rounded hover:underline text-blue-500 border-green-400'>
                        Reset Game
                    </button>
                </section>
            </main>
        </>
    );
}

export default Board;