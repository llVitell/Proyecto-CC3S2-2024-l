import { useState } from 'react'
import { Piece } from '../model/piece'
import { PieceString, SquareInfo } from '../utils/types'
import { Board } from '../model/board'

export const useBoard = () => {
  const boardInfo = new Board()

  // El objeto a usar
  const [boardObj, setBoardObj] = useState<Board>(boardInfo)

  // Sus atributos:
  // el tablero:
  const [board, setBoard] = useState<Piece[][]>(boardInfo.getGrid())
  // casilla seleccionada
  const [selectedPiece, setSelectedPiece] = useState<SquareInfo | null>(
    boardInfo.getSelectedPiece()
  )
  // movimientos validos
  const [validMoves, setValidMoves] = useState<SquareInfo[]>(
    boardInfo.getValidMovesList()
  )
  // cambiar turno
  const [turnOwner, setTurnOwner] = useState<PieceString>(
    boardInfo.getTurnOwner()
  )
  // resultados
  //const [capturedPiecesCounter, setCapturedPiecesCounter] = useState<PointCounterInfo>(boardInfo.getCapturedPiecesCounter());
  // el ganador
  const [winnerPlayer, setWinnerPlayer] = useState<PieceString>(
    boardInfo.getWinnerPlayer()
  )

  const handleIsStillTheMatch = (rowIndex: number, colIndex: number) => {
    if (boardObj.getWinnerPlayer() === 'none') {
      // el objeto
      boardObj.handleSquareOnClickEvent(rowIndex, colIndex)
      setBoardObj(boardObj)
      // sus atributos
      setSelectedPiece(boardObj.getSelectedPiece())
      setValidMoves(boardObj.getValidMovesList())
      setTurnOwner(boardObj.getTurnOwner())
      setBoard(boardObj.getGrid())
    }
  }

  // Puedes retornar todos los estados y funciones que necesites en tu componente
  return {
    boardObj,
    board,
    selectedPiece,
    validMoves,
    turnOwner,
    //capturedPiecesCounter,
    winnerPlayer,
    handleIsStillTheMatch,
    setBoard,
    setSelectedPiece,
    setValidMoves,
    setTurnOwner,
    //setCapturedPiecesCounter,
    setWinnerPlayer
  }
}
