/* eslint-disable @typescript-eslint/no-array-constructor */
import Piece from "./piece.js";

class Board {
    constructor(
        grid = [
            [new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
            [new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black')],
            [new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')],
            [new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none')],
            [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')]
        ],
        selectedPiece = null,
        validMovesList = [],
        turnOwner = "red",
        capturedPiecesCounter = { red: 0, black: 0 },
        winnerPlayer = "none",
        isMultiCaptureFlag = false,
        multiCapturePiece = null
    ) {
        this.BOARD_SIZE = 8;
        this.grid = grid;
        this.selectedPiece = selectedPiece;
        this.validMovesList = validMovesList;
        this.turnOwner = turnOwner;
        this.capturedPiecesCounter = capturedPiecesCounter;
        this.winnerPlayer = winnerPlayer;
        this.isMultiCaptureFlag = isMultiCaptureFlag;
        this.multiCapturePiece = multiCapturePiece;
    }

    getGrid() {
        return this.grid;
    }

    setGrid(grid) {
        this.grid = grid;
    }

    getSelectedPiece() {
        return this.selectedPiece;
    }

    setSelectedPiece(selectedPiece) {
        this.selectedPiece = selectedPiece;
    }

    getValidMovesList() {
        return this.validMovesList;
    }

    setValidMoves(validMovesList) {
        this.validMovesList = validMovesList;
    }

    getTurnOwner() {
        return this.turnOwner;
    }

    setTurnOwner(turnOwner) {
        this.turnOwner = turnOwner;
    }

    getCapturedPiecesCounter() {
        return this.capturedPiecesCounter;
    }

    setCapturedPiecesCounter(capturedPiecesCounter) {
        this.capturedPiecesCounter = capturedPiecesCounter;
    }

    getWinnerPlayer() {
        return this.winnerPlayer;
    }

    setWinnerPlayer(winnerPlayer) {
        this.winnerPlayer = winnerPlayer;
    }

    getOppositePlayer(currentPlayer) {
        return currentPlayer === "red" ? "black" : "red";
    }

    multipleCapturesDetectionFlag(rowIndex, colIndex) {
        let hasMoreCaptures = false;
        let capturingMoves = [];
        let isKing = this.grid[rowIndex][colIndex].getIsKing();

        if (this.grid[rowIndex][colIndex].getColor() !== "none") {
            [, capturingMoves] = (isKing)
                ? this.getKingMoves(rowIndex, colIndex)
                : this.getPawnMoves(rowIndex, colIndex);

            capturingMoves.forEach(move => {
                const [row, col] = [move.row, move.col];
                let [middlePieceRow, middlePieceCol] = this.getMiddlePieceIndexes(rowIndex, colIndex, isKing, move);
                if (
                    row >= 0 && row < this.BOARD_SIZE && col >= 0 && col < this.BOARD_SIZE &&
                    this.grid[row][col].getColor() === 'none' &&
                    this.grid[middlePieceRow][middlePieceCol].getColor() !== 'none' &&
                    this.grid[middlePieceRow][middlePieceCol].getColor() !== this.turnOwner
                ) {
                    hasMoreCaptures = true;
                    return;
                }
            });
        }
        return hasMoreCaptures;
    }

    handleSquareOnClickEvent(rowIndex, colIndex) {
        if (this.grid[rowIndex][colIndex].getColor() === this.getOppositePlayer(this.turnOwner)) {
            return;
        }

        if (this.selectedPiece) {
            this.selectedPieceEvents(rowIndex, colIndex, this.selectedPiece);
        } else {
            this.noSelectedPieceEvents(rowIndex, colIndex);
        }
    }

    selectedPieceEvents(rowIndex, colIndex, selectedPiece) {
        if (selectedPiece.row === rowIndex && selectedPiece.col === colIndex) {
            this.setSelectedPiece(null);
            this.setValidMoves([]);
            return;
        }

        if (
            this.isMultiCaptureFlag &&
            (selectedPiece.row !== this.multiCapturePiece?.row || selectedPiece.col !== this.multiCapturePiece?.col)
        ) {
            return;
        }

        if (this.validMovesList.some(move => move.row === rowIndex && move.col === colIndex)) {
            this.movePiece(rowIndex, colIndex, selectedPiece);
        }
    }

    noSelectedPieceEvents(rowIndex, colIndex) {
        if (this.isMultiCaptureFlag && rowIndex !== this.multiCapturePiece?.row && colIndex !== this.multiCapturePiece?.row) {
            return;
        }

        if (this.grid[rowIndex][colIndex].getColor() !== 'none') {
            this.setSelectedPiece({ row: rowIndex, col: colIndex });
            this.handleValidMoves(rowIndex, colIndex);
        }
    }

    movePiece(rowIndex, colIndex, selectedPiece) {
        const newBoard = [...this.grid];
        newBoard[rowIndex][colIndex].setColor(newBoard[selectedPiece.row][selectedPiece.col].getColor());
        newBoard[selectedPiece.row][selectedPiece.col].setColor('none');

        if (newBoard[selectedPiece.row][selectedPiece.col].getIsKing()) {
            newBoard[rowIndex][colIndex].setIsKing(true);
            newBoard[selectedPiece.row][selectedPiece.col].setIsKing(false);
        }

        let itCapturedFlag = false;
        let actualizedCapturedPiecesCounterObject = { red: 0, black: 0 };

        if (Math.abs(rowIndex - selectedPiece.row) === 2 && Math.abs(colIndex - selectedPiece.col) === 2) {
            const middlePieceRow = selectedPiece.row + (rowIndex - selectedPiece.row) / 2;
            const middlePieceCol = selectedPiece.col + (colIndex - selectedPiece.col) / 2;

            newBoard[middlePieceRow][middlePieceCol].setColor('none');
            newBoard[middlePieceRow][middlePieceCol].setIsKing(false);

            const turnOwnerResult = this.turnOwner === "red" ? this.capturedPiecesCounter["red"] : this.capturedPiecesCounter["black"];
            actualizedCapturedPiecesCounterObject = { ...this.capturedPiecesCounter, [this.turnOwner]: turnOwnerResult + 1 };
            this.setCapturedPiecesCounter(actualizedCapturedPiecesCounterObject);
            itCapturedFlag = true;
        }

        if (
            (newBoard[rowIndex][colIndex].getColor() === 'red' && rowIndex === 0) ||
            (newBoard[rowIndex][colIndex].getColor() === 'black' && rowIndex === this.BOARD_SIZE - 1)
        ) {
            newBoard[rowIndex][colIndex].setIsKing(true);
        }

        this.setGrid(newBoard);

        if (this.capturedPiecesCounter.black === 12 || this.capturedPiecesCounter.red === 12) {
            this.setWinnerPlayer(this.turnOwner);
            this.setTurnOwner('none');
            return;
        }

        if (this.isMultiCaptureFlag) {
            this.isMultiCaptureFlag = false;
            this.multiCapturePiece = null;
        }

        if (this.multipleCapturesDetectionFlag(rowIndex, colIndex) && itCapturedFlag) {
            this.isMultiCaptureFlag = true;
            this.multiCapturePiece = { row: rowIndex, col: colIndex };
        } else {
            this.setTurnOwner(this.turnOwner === 'red' ? 'black' : 'red');
        }

        this.setSelectedPiece(null);
        this.setValidMoves([]);
    }

    handleValidMoves(rowIndex, colIndex) {
        const piece = this.grid[rowIndex][colIndex];
        let validMovesForPiece = [];

        if (piece.getColor() !== "none") {
            validMovesForPiece = this.getValidMovesToDo(piece.getIsKing(), rowIndex, colIndex);
        }

        this.setValidMoves(validMovesForPiece);
    }

    getValidMovesToDo(isKing, rowIndex, colIndex) {
        let possibleMoves, capturingMoves;
        [possibleMoves, capturingMoves] = (isKing) ? this.getKingMoves(rowIndex, colIndex) : this.getPawnMoves(rowIndex, colIndex);
        const validMovesForPiece = [];

        possibleMoves.forEach(move => {
            const [row, col] = [move.row, move.col];
            if (row >= 0 && row < this.BOARD_SIZE && col >= 0 && col < this.BOARD_SIZE && this.grid[row][col].getColor() === 'none') {
                validMovesForPiece.push({ row, col });
            }
        });

        capturingMoves.forEach(move => {
            const [row, col] = [move.row, move.col];
            let [middlePieceRow, middlePieceCol] = this.getMiddlePieceIndexes(rowIndex, colIndex, isKing, move);

            if (
                row >= 0 && row < this.BOARD_SIZE && col >= 0 && col < this.BOARD_SIZE &&
                this.grid[row][col].getColor() === 'none' &&
                this.grid[middlePieceRow][middlePieceCol].getColor() !== 'none' &&
                this.grid[middlePieceRow][middlePieceCol].getColor() !== this.turnOwner
            ) {
                validMovesForPiece.push({ row, col });
            }
        });
        return validMovesForPiece;
    }

    getMiddlePieceIndexes(currentRowIndex, currentColIndex, isKing, movePiece) {
        const [moveRowIndex, moveColIndex] = [movePiece.row, movePiece.col];
        let middlePieceRow, middlePieceCol;

        if (isKing) {
            middlePieceRow = currentRowIndex + (moveRowIndex - currentRowIndex) / 2;
            middlePieceCol = currentColIndex + (moveColIndex - currentColIndex) / 2;
        } else {
            const forwardDirection = this.grid[currentRowIndex][currentColIndex].getColor() === 'red' ? -1 : 1;
            middlePieceRow = currentRowIndex + forwardDirection;
            middlePieceCol = (currentColIndex + moveColIndex) / 2;
        }
        return [middlePieceRow, middlePieceCol];
    }

    getPawnMoves(rowIndex, colIndex) {
        const forwardDirection = this.grid[rowIndex][colIndex].getColor() === 'red' ? -1 : 1;
        const pawnPossibleMoves = [
            { row: rowIndex + forwardDirection, col: colIndex - 1 }, // Diagonal izq
            { row: rowIndex + forwardDirection, col: colIndex + 1 }, // Diagonal der
        ];
        const pawnCapturingMoves = [
            { row: rowIndex + forwardDirection * 2, col: colIndex - 2 }, // Diagonal izq
            { row: rowIndex + forwardDirection * 2, col: colIndex + 2 }, // Diagonal der
        ];
        return [pawnPossibleMoves, pawnCapturingMoves];
    }

    getKingMoves(rowIndex, colIndex) {
        const kingDiagonalMoves = [
            // abajo
            { row: rowIndex + 1, col: colIndex - 1 },
            { row: rowIndex + 1, col: colIndex + 1 },
            // arriba
            { row: rowIndex - 1, col: colIndex - 1 },
            { row: rowIndex - 1, col: colIndex + 1 },
        ];
        const kingCapturingMoves = [
            // abajo
            { row: rowIndex + 2, col: colIndex - 2 },
            { row: rowIndex + 2, col: colIndex + 2 },
            // arriba
            { row: rowIndex - 2, col: colIndex - 2 },
            { row: rowIndex - 2, col: colIndex + 2 },
        ];
        return [kingDiagonalMoves, kingCapturingMoves];
    }
}

export default Board;