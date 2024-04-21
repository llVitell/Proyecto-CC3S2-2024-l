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
        winnerPlayer = "none"
    ) {
        this.BOARD_SIZE = 8;
        this.grid = grid;
        this.selectedPiece = selectedPiece;
        this.validMovesList = validMovesList;
        this.turnOwner = turnOwner
        this.capturedPiecesCounter = capturedPiecesCounter;
        this.winnerPlayer = winnerPlayer;
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
        let capturingMoves = new Array();
        //[];
        let forwardDirection;
        let middlePieceRow, middlePieceCol;

        if (this.grid[rowIndex][colIndex].getColor() !== "none" && !this.grid[rowIndex][colIndex].getIsKing()) {
            forwardDirection = this.grid[rowIndex][colIndex].getColor() === 'red' ? -1 : 1;
            capturingMoves = [
                { row: rowIndex + forwardDirection * 2, col: colIndex - 2 },
                { row: rowIndex + forwardDirection * 2, col: colIndex + 2 },
            ];
        } else if (this.grid[rowIndex][colIndex].getColor() !== "none" && this.grid[rowIndex][colIndex].getIsKing()) {
            capturingMoves = [
                { row: rowIndex + 2, col: colIndex - 2 },
                { row: rowIndex + 2, col: colIndex + 2 },
                { row: rowIndex - 2, col: colIndex - 2 },
                { row: rowIndex - 2, col: colIndex + 2 },
            ];
        }

        capturingMoves.forEach(move => {
            const [row, col] = [move.row, move.col];

            if (this.grid[rowIndex][colIndex].getColor() !== "none" && !this.grid[rowIndex][colIndex].getIsKing()) {
                middlePieceRow = rowIndex + forwardDirection;
                middlePieceCol = (colIndex + col) / 2;
            } else if (this.grid[rowIndex][colIndex].getColor() !== "none" && this.grid[rowIndex][colIndex].getIsKing()) {
                middlePieceRow = rowIndex + (move.row - rowIndex) / 2;
                middlePieceCol = colIndex + (move.col - colIndex) / 2;
            }

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

        return hasMoreCaptures;
    }

    handleSquareOnClickEvent(rowIndex, colIndex) {
        if (this.grid[rowIndex][colIndex].getColor() === this.getOppositePlayer(this.turnOwner)) {
            return;
        }

        if (this.selectedPiece) {
            if (this.selectedPiece.row === rowIndex && this.selectedPiece.col === colIndex) {
                this.setSelectedPiece(null);
                this.setValidMoves([]);
                return;
            }

            if (this.validMovesList.some(move => move.row === rowIndex && move.col === colIndex)) {
                this.movePiece(rowIndex, colIndex, this.selectedPiece);
            }
        } else {
            if (this.grid[rowIndex][colIndex].getColor() !== 'none') {
                this.setSelectedPiece({ row: rowIndex, col: colIndex });
                this.calculateValidMoves(rowIndex, colIndex);
            }
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

        if (!this.multipleCapturesDetectionFlag(rowIndex, colIndex) || !itCapturedFlag) {
            this.setTurnOwner(this.turnOwner === 'red' ? 'black' : 'red');
        }

        this.setSelectedPiece(null);
        this.setValidMoves([]);
    }

    calculateValidMoves(rowIndex, colIndex) {
        const piece = this.grid[rowIndex][colIndex];
        let validMovesForPiece = new Array()
        //= [];

        if (piece.getColor() !== "none" && !this.grid[rowIndex][colIndex].getIsKing()) {
            const forwardDirection = piece.getColor() === 'red' ? -1 : 1;
            const pawnPossibleMoves = [
                { row: rowIndex + forwardDirection, col: colIndex - 1 },
                { row: rowIndex + forwardDirection, col: colIndex + 1 },
            ];
            const pawnCapturingMoves = [
                { row: rowIndex + forwardDirection * 2, col: colIndex - 2 },
                { row: rowIndex + forwardDirection * 2, col: colIndex + 2 },
            ];
            validMovesForPiece = this.getValidMovesToDo(pawnPossibleMoves, pawnCapturingMoves, false, rowIndex, colIndex);
        } else if (piece.getColor() !== "none" && piece.getIsKing()) {
            const kingDiagonalMoves = [
                { row: rowIndex + 1, col: colIndex - 1 },
                { row: rowIndex + 1, col: colIndex + 1 },
                { row: rowIndex - 1, col: colIndex - 1 },
                { row: rowIndex - 1, col: colIndex + 1 },
            ];
            const kingCapturingMoves = [
                { row: rowIndex + 2, col: colIndex - 2 },
                { row: rowIndex + 2, col: colIndex + 2 },
                { row: rowIndex - 2, col: colIndex - 2 },
                { row: rowIndex - 2, col: colIndex + 2 },
            ];
            validMovesForPiece = this.getValidMovesToDo(kingDiagonalMoves, kingCapturingMoves, true, rowIndex, colIndex);
        }
        this.setValidMoves(validMovesForPiece);
    }

    getValidMovesToDo(possibleMoves, capturingMoves, isKing, rowIndex, colIndex) {
        const piece = this.grid[rowIndex][colIndex];
        const forwardDirection = piece.getColor() === 'red' ? -1 : 1;
        const validMovesForPiece = new Array();
        //[];
        possibleMoves.forEach(move => {
            const [row, col] = [move.row, move.col];
            if (row >= 0 && row < this.BOARD_SIZE && col >= 0 && col < this.BOARD_SIZE && this.grid[row][col].getColor() === 'none') {
                validMovesForPiece.push({ row, col });
            }
        });
        capturingMoves.forEach(move => {
            const [row, col] = [move.row, move.col];
            let middlePieceRow, middlePieceCol;

            if (isKing) {
                middlePieceRow = rowIndex + (move.row - rowIndex) / 2;
                middlePieceCol = colIndex + (move.col - colIndex) / 2;
            } else {
                middlePieceRow = rowIndex + forwardDirection;
                middlePieceCol = (colIndex + col) / 2;
            }

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
}

export default Board;