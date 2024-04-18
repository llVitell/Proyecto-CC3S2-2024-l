import { useState } from "react";
import { initializeBoard } from "../utils/constants";
import { Piece } from "../model/piece";
import { PieceString, PointCounterInfo, SquareInfo } from "../utils/types";
import { Board } from "../model/board";

export const useBoard = () => {
    const boardInfo = new Board();

    const [boardObj, setBoardObj] = useState<Board>(boardInfo);

    const [board, setBoard] = useState<Piece[][]>(boardInfo.getGrid());
    // casilla seleccionada
    const [selectedPiece, setSelectedPiece] = useState<SquareInfo | null>(boardInfo.getSelectedPiece());
    // movimientos validos
    const [validMoves, setValidMoves] = useState<SquareInfo[]>(boardInfo.getValidMoves());
    // cambiar turno
    const [turnOwner, setTurnOwner] = useState<PieceString>(boardInfo.getTurnOwner());
    // resultados
    const [capturedPiecesCounter, setCapturedPiecesCounter] = useState<PointCounterInfo>(boardInfo.getCapturedPiecesCounter());
    //const [winnerPlayer, setWinnerPlayer] = useState<PieceString | null>(null);
    const [winnerPlayer, setWinnerPlayer] = useState<PieceString>(boardInfo.getWinnerPlayer());

    /*
    const handleSelectPiece = (row: number, col: number) => {
        // Lógica para seleccionar una pieza
        setSelectedPiece({ row, col });
    };
    */

    const handleIsStillTheMatch = (rowIndex: number, colIndex: number) => {
        if (winnerPlayer === "none") {
            //boardInfo
            boardObj.handleSquareOnClickEvent(rowIndex, colIndex);
            setBoardObj(boardObj);
            ///*
            console.log(boardObj.getSelectedPiece());
            setSelectedPiece(boardObj.getSelectedPiece());
            console.log(boardObj.getSelectedPiece());
            setValidMoves(boardObj.getValidMoves());
            setTurnOwner(boardObj.getTurnOwner());
            console.log(boardObj.getTurnOwner())
            setBoard(boardObj.getGrid());
            //*/
        }
    }

    // Puedes retornar todos los estados y funciones que necesites en tu componente
    return {
        boardObj,
        board,
        selectedPiece,
        validMoves,
        turnOwner,
        capturedPiecesCounter,
        winnerPlayer,
        handleIsStillTheMatch,
        setBoard,
        setSelectedPiece,
        setValidMoves,
        setTurnOwner,
        setCapturedPiecesCounter,
        setWinnerPlayer
    };

  }