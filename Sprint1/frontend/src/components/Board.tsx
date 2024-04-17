import { useState } from 'react'
import { PieceString } from '../utils/types'
import { BOARD_SIZE, initializeBoard } from '../utils/constants'
import { Piece } from '../model/piece'
import PieceDiv from './Piece'
import Button from './Button'
import Session from '../model/session'

const Board = () => {
  const session = new Session()

  const [board, setBoard] = useState<Piece[][]>(initializeBoard())
  // casilla seleccionada
  const [selectedPiece, setSelectedPiece] = useState<{
    row: number
    col: number
  } | null>(null)
  // movimientos validos
  const [validMoves, setValidMoves] = useState<{ row: number; col: number }[]>(
    []
  )
  // cambiar turno
  const [turnOwner, setTurnOwner] = useState<PieceString>('red')
  // resultados
  const [capturedPiecesCounter, setCapturedPiecesCounter] = useState<{
    red: number
    black: number
  }>({ red: 0, black: 0 })
  //const [winnerPlayer, setWinnerPlayer] = useState<PieceString | null>(null);
  const [winnerPlayer, setWinnerPlayer] = useState<PieceString>('none')

  const oppositePlayer = (currentPlayer: PieceString) =>
    currentPlayer === 'red' ? 'black' : 'red'

  // Funcion para ver si se puede hacer movimientos multiples
  const handleMultipleCaptures = (rowIndex: number, colIndex: number) => {
    let hasMoreCaptures: boolean = false
    let capturingMoves: { row: number; col: number }[] = []
    let forwardDirection: number
    let middlePieceRow: number, middlePieceCol: number

    if (
      board[rowIndex][colIndex].getColor() !== 'null' &&
      !board[rowIndex][colIndex].getIsKing()
    ) {
      forwardDirection = board[rowIndex][colIndex].getColor() === 'red' ? -1 : 1
      // Los movimientos de captura
      capturingMoves = [
        { row: rowIndex + forwardDirection * 2, col: colIndex - 2 }, // Diagonal izq
        { row: rowIndex + forwardDirection * 2, col: colIndex + 2 } // Diagonal der
      ]
    } else if (
      board[rowIndex][colIndex].getColor() !== 'null' &&
      board[rowIndex][colIndex].getIsKing()
    ) {
      capturingMoves = [
        { row: rowIndex + 2, col: colIndex - 2 },
        { row: rowIndex + 2, col: colIndex + 2 },
        { row: rowIndex - 2, col: colIndex - 2 },
        { row: rowIndex - 2, col: colIndex + 2 }
      ]
    }

    capturingMoves.forEach(move => {
      const [row, col] = [move.row, move.col]

      if (
        board[rowIndex][colIndex].getColor() !== 'null' &&
        !board[rowIndex][colIndex].getIsKing()
      ) {
        middlePieceRow = rowIndex + forwardDirection
        middlePieceCol = (colIndex + col) / 2
      } else if (
        board[rowIndex][colIndex].getColor() !== 'null' &&
        board[rowIndex][colIndex].getIsKing()
      ) {
        middlePieceRow = rowIndex + (move.row - rowIndex) / 2
        middlePieceCol = colIndex + (move.col - colIndex) / 2
      }

      if (
        row >= 0 &&
        row < BOARD_SIZE &&
        col >= 0 &&
        col < BOARD_SIZE &&
        board[row][col].getColor() === 'none' &&
        board[middlePieceRow][middlePieceCol].getColor() !== 'none' &&
        board[middlePieceRow][middlePieceCol].getColor() !== turnOwner
      ) {
        hasMoreCaptures = true
        return
      }
    })

    return hasMoreCaptures
  }

  const handleIsStillTheMatch = (rowIndex: number, colIndex: number) => {
    if (winnerPlayer === 'none') {
      handleSquareClick(rowIndex, colIndex)
    }
  }

  const handleSquareClick = (rowIndex: number, colIndex: number) => {
    // If it's not the current player's turn, return
    if (board[rowIndex][colIndex].getColor() === oppositePlayer(turnOwner)) {
      return
    }
    // Si ya hay una ficha-dama seleccionada entonces se buscan los movimientos validos
    if (selectedPiece) {
      // Si la misma ficha es clickeada otra vez... la deseleccionamos
      if (selectedPiece.row === rowIndex && selectedPiece.col === colIndex) {
        setSelectedPiece(null)
        setValidMoves([])
        return
      }
      // Antes de hacer un movimiento, se checkea si la casilla clickeada es un movimiento valido
      if (
        validMoves.some(move => move.row === rowIndex && move.col === colIndex)
      ) {
        // Acá se hace la logica del movimiento de la fichas una vez se cumpla
        const newBoard = [...board]
        //newBoard[rowIndex][colIndex] = newBoard[selectedPiece.row][selectedPiece.col];
        newBoard[rowIndex][colIndex].setColor(
          newBoard[selectedPiece.row][selectedPiece.col].getColor()
        )
        //newBoard[selectedPiece.row][selectedPiece.col] = 'none';
        newBoard[selectedPiece.row][selectedPiece.col].setColor('none')

        // hacemos que la corona siga con la dama
        if (newBoard[selectedPiece.row][selectedPiece.col].getIsKing()) {
          newBoard[rowIndex][colIndex].setIsKing(true)
          newBoard[selectedPiece.row][selectedPiece.col].setIsKing(false)
        }

        // aca se hace la funcionalidad de capturar la ficha del equipo contrario
        // usando "vector direccion": vector = (casilla_actual - selectedPiece) -> vector/2 = (casilla_actual - selectedPiece)/2
        // casilla_actual = (rowIndex, colIndex)
        // middlePiece = selectedPiece + vector/2
        const middlePieceRow =
          selectedPiece.row + (rowIndex - selectedPiece.row) / 2
        const middlePieceCol =
          selectedPiece.col + (colIndex - selectedPiece.col) / 2

        // para ver si la dama captura algo
        let itCaptured: boolean = false
        let actualizedCapturedPiecesCounterObject: {
          red: number
          black: number
        } = { red: 0, black: 0 }
        // tiene que ser la diferencia entre la ficha futura y la actual 2 por la abscisa y ordenada para recien capturar
        if (
          Math.abs(rowIndex - selectedPiece.row) === 2 &&
          Math.abs(colIndex - selectedPiece.col) === 2
        ) {
          newBoard[middlePieceRow][middlePieceCol].setColor('none') // Elimina la pieza capturada-comida
          newBoard[middlePieceRow][middlePieceCol].setIsKing(false) // Le quita la corona independientemente si es rey o no

          const turnOwnerResult =
            turnOwner === 'red'
              ? capturedPiecesCounter['red']
              : capturedPiecesCounter['black']
          actualizedCapturedPiecesCounterObject = {
            ...capturedPiecesCounter,
            [turnOwner]: turnOwnerResult + 1
          }
          console.log(actualizedCapturedPiecesCounterObject)
          setCapturedPiecesCounter(actualizedCapturedPiecesCounterObject)
          itCaptured = true
        }

        // Comprueba si la pieza llega al borde limite opuesto para transformarla en rey
        if (
          newBoard[rowIndex][colIndex].getColor() === 'red' &&
          rowIndex === 0
        ) {
          newBoard[rowIndex][colIndex].setIsKing(true)
        } else if (
          newBoard[rowIndex][colIndex].getColor() === 'black' &&
          rowIndex === BOARD_SIZE - 1
        ) {
          newBoard[rowIndex][colIndex].setIsKing(true)
        }

        setBoard(newBoard)
        console.log(actualizedCapturedPiecesCounterObject)
        console.log(capturedPiecesCounter)
        //console.log(itCaptured);

        if (
          actualizedCapturedPiecesCounterObject.black === 8 ||
          actualizedCapturedPiecesCounterObject.red === 8
        ) {
          console.log('WINNNER', turnOwner)
          setWinnerPlayer(turnOwner)
          setTurnOwner('none')
          return
        }

        // una vez que se captura la ficha, vemos si se cambia el turno o no
        // tiene que no haber opcion de captura multiple y tiene que haber capturado algo
        if (!handleMultipleCaptures(rowIndex, colIndex) || !itCaptured) {
          setTurnOwner(turnOwner === 'red' ? 'black' : 'red')
        }

        // Limpiamos la pieza seleccionada y los movimientos validos
        setSelectedPiece(null)
        setValidMoves([])
      }
    } else {
      // Si no hay ninguna dama seleccionada entonces buscamos sus movimientos posibles y vemos si la seleccionamos

      // Chequea si la casilla seleccionada contiene una ficha-dama de algun color
      if (board[rowIndex][colIndex].getColor() !== 'none') {
        // Si la ficha es clickeada, la ponemos como seleccionada y calculamos y mostramos sus posibles jugadas-movimientos validos que puede realizar
        setSelectedPiece({ row: rowIndex, col: colIndex })
        calculateValidMoves(rowIndex, colIndex)
      } else {
        setSelectedPiece(null)
        setValidMoves([])
      }
    }
  }

  // Funcion para calcular los movimientos validos de una pieza seleccionada
  const calculateValidMoves = (rowIndex: number, colIndex: number) => {
    const piece = board[rowIndex][colIndex]
    console.log('piece', piece)
    const forwardDirection = piece.getColor() === 'red' ? -1 : 1
    // aca se guardan los movimientos posibles
    const validMovesForPiece: { row: number; col: number }[] = []

    // para las damas peon
    if (piece.getColor() !== 'null' && !board[rowIndex][colIndex].getIsKing()) {
      const pawnPossibleMoves = [
        { row: rowIndex + forwardDirection, col: colIndex - 1 }, // Diagonal izq
        { row: rowIndex + forwardDirection, col: colIndex + 1 } // Diagonal der
      ]

      pawnPossibleMoves.forEach(move => {
        const [row, col] = [move.row, move.col]
        // para verificar si es válido y añadirlo como posible
        if (
          row >= 0 &&
          row < BOARD_SIZE &&
          col >= 0 &&
          col < BOARD_SIZE &&
          board[row][col].getColor() === 'none'
        ) {
          validMovesForPiece.push({ row, col })
        }
      })

      // Los movimientos de captura
      const pawnCapturingMoves = [
        { row: rowIndex + forwardDirection * 2, col: colIndex - 2 }, // Diagonal izq
        { row: rowIndex + forwardDirection * 2, col: colIndex + 2 } // Diagonal der
      ]

      pawnCapturingMoves.forEach(move => {
        const [row, col] = [move.row, move.col]
        const middlePieceRow = rowIndex + forwardDirection
        const middlePieceCol = (colIndex + col) / 2
        // basicamente: colIndex + |-2| o colIndex + forwardDirection :v okno

        if (
          // condiciones de existencia
          row >= 0 &&
          row < BOARD_SIZE &&
          col >= 0 &&
          col < BOARD_SIZE &&
          // que la casilla trasera diagonal de la opuesta nos podamos mover
          board[row][col].getColor() === 'none' &&
          // que al que va a comer no sea nulo
          board[middlePieceRow][middlePieceCol].getColor() !== 'none' &&
          // no es del mismo color
          board[middlePieceRow][middlePieceCol].getColor() !== turnOwner
        ) {
          validMovesForPiece.push({ row, col })
        }
      })
    } else if (piece.getColor() !== 'null' && piece.getIsKing()) {
      // Checkea movimientos diagonales para las fichas reinas
      const kingDiagonalMoves = [
        // abajo
        { row: rowIndex + 1, col: colIndex - 1 },
        { row: rowIndex + 1, col: colIndex + 1 },
        // arriba
        { row: rowIndex - 1, col: colIndex - 1 },
        { row: rowIndex - 1, col: colIndex + 1 }
      ]

      kingDiagonalMoves.forEach(move => {
        const [row, col] = [move.row, move.col]
        if (
          row >= 0 &&
          row < BOARD_SIZE &&
          col >= 0 &&
          col < BOARD_SIZE &&
          board[row][col].getColor() === 'none'
        ) {
          validMovesForPiece.push({ row, col })
        }
      })

      // Checkea movimientos de captura  para las fichas reinas
      const kingCapturingMoves = [
        // abajo
        { row: rowIndex + 2, col: colIndex - 2 },
        { row: rowIndex + 2, col: colIndex + 2 },
        // arriba
        { row: rowIndex - 2, col: colIndex - 2 },
        { row: rowIndex - 2, col: colIndex + 2 }
      ]

      kingCapturingMoves.forEach(move => {
        const [row, col] = [move.row, move.col]
        // vector = (casilla_futura - casilla_actual)
        const middlePieceRow = rowIndex + (move.row - rowIndex) / 2
        const middlePieceCol = colIndex + (move.col - colIndex) / 2
        // middlePiece = casilla_actual + vector/2
        console.log('turnOwner', turnOwner)

        if (
          row >= 0 &&
          row < BOARD_SIZE &&
          col >= 0 &&
          col < BOARD_SIZE &&
          // la casilla destino tiene que no haber nada
          board[row][col].getColor() === 'none' &&
          // no puede ser nula
          board[middlePieceRow][middlePieceCol].getColor() !== 'none' &&
          // que no sean el mismo, tiene que ser la dama opuesta
          board[middlePieceRow][middlePieceCol].getColor() !== turnOwner
        ) {
          validMovesForPiece.push({ row, col })
        }
      })
    }

    setValidMoves(validMovesForPiece)
  }

  const handleSendStatsToThisUserAndResetGame = (winner: PieceString) => {
    // funciones de registro de victoria
    if (winner !== 'none') {
      console.log('winner = ', winner)
      console.log('se registran datos en el servidor')
    }

    // reset
    setBoard(initializeBoard())
    setCapturedPiecesCounter({ red: 0, black: 0 })
    setSelectedPiece(null)
    setValidMoves([])
    setTurnOwner('red')
    setWinnerPlayer('none')
  }

  return (
    <>
      <header className='shadow-md w-full'>
        <nav className='flex items-center justify-between bg-white py-5 nr:px-10 px-7'>
          <div className='text-2xl flex items-center text-gray-800 font-bold'>
            Juego de Damas
          </div>
          <Button onClick={() => session.logOut()} text='Log Out'></Button>
        </nav>
      </header>

      <main className='flex flex-col justify-center items-center mt-2'>
        <section className='text-xl my-6'>
          <div className='font-bold'>Current Stats:</div>
          <div>{`Red: ${capturedPiecesCounter.red} - Black: ${capturedPiecesCounter.black}`}</div>
          <div>
            {turnOwner !== 'none'
              ? `Turn: ${turnOwner === 'red' ? 'Red' : 'Black'}`
              : 'Partida Terminada'}
          </div>
        </section>
        <div className='flex flex-col border-4 border-gray-700'>
          {board.map((row, rowIndex) => (
            <div className='flex' key={rowIndex}>
              {row.map((piece, colIndex) => (
                <div
                  className={`${colIndex % 2 === rowIndex % 2 ? 'bg-[#2c3b4b]' : 'bg-[#ebebff]'}  
                                flex justify-center items-center
                                    xs:w-6 xs:h-6
                                    w-10 h-10
                                    md:w-12 md:h-12
                                    lg:w-16 lg:h-16            
                                `}
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleIsStillTheMatch(rowIndex, colIndex)}
                  style={{
                    backgroundColor: validMoves.some(
                      move => move.row === rowIndex && move.col === colIndex
                    )
                      ? '#9ACD32'
                      : ''
                  }}
                >
                  {piece.getColor() !== 'none' ? (
                    <PieceDiv pieceInfo={piece} />
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
        <section className='text-xl mt-6'>
          <div className='mb-3'>{`Winner: ${winnerPlayer !== 'none' ? winnerPlayer : 'Not yet'}`}</div>
          {winnerPlayer !== 'none' ? (
            <div className='my-2 text-green-600'>
              Please press reset to iniciate other game
            </div>
          ) : null}
          <Button
            onClick={() => handleSendStatsToThisUserAndResetGame(winnerPlayer)}
            text='Reset Game'
          ></Button>
        </section>
      </main>
    </>
  )
}

export default Board
