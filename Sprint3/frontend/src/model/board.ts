import { initializeBoard } from "../utils/constants";
import { PieceString, PointCounterInfo, SquareInfo } from "../utils/types";
import { Piece } from "./piece";

export class Board {
    BOARD_SIZE = 8;
    // tablero
    grid: Piece[][];
    // dama seleccionada
    selectedPiece: SquareInfo | null;
    // movimientos validos
    validMovesList: SquareInfo[];
    // turno del juego
    turnOwner: PieceString;
    // resultados
    capturedPiecesCounter: PointCounterInfo;
    // ganador
    winnerPlayer: PieceString;

    // Constructor de la clase
    constructor(
        grid: Piece[][] = initializeBoard(),
        selectedPiece: SquareInfo | null = null,
        validMovesList: SquareInfo[] = [],
        turnOwner: PieceString = "red",
        capturedPiecesCounter: PointCounterInfo = { red: 0, black: 0 },
        winnerPlayer: PieceString = "none"
    ) {
        this.grid = grid;
        this.selectedPiece = selectedPiece;
        this.validMovesList = validMovesList;
        this.turnOwner = turnOwner
        this.capturedPiecesCounter = capturedPiecesCounter;
        this.winnerPlayer = winnerPlayer;
    }

    getGrid(): Piece[][] {
        return this.grid;
    }

    setGrid(grid: Piece[][]) {
        this.grid = grid;
    }

    getSelectedPiece(): SquareInfo | null {
        return this.selectedPiece;
    }

    setSelectedPiece(selectedPiece: SquareInfo | null): void {
        this.selectedPiece = selectedPiece;
    }

    getValidMovesList(): SquareInfo[] {
        return this.validMovesList;
    }

    setValidMoves(validMovesList: SquareInfo[]): void {
        this.validMovesList = validMovesList;
    }

    getTurnOwner(): PieceString {
        return this.turnOwner;
    }

    setTurnOwner(turnOwner: PieceString): void {
        this.turnOwner = turnOwner;
    }

    getCapturedPiecesCounter(): PointCounterInfo {
        return this.capturedPiecesCounter;
    }

    setCapturedPiecesCounter(capturedPiecesCounter: PointCounterInfo): void {
        this.capturedPiecesCounter = capturedPiecesCounter;
    }

    getWinnerPlayer(): PieceString {
        return this.winnerPlayer;
    }

    setWinnerPlayer(winnerPlayer: PieceString): void {
        this.winnerPlayer = winnerPlayer;
    }

    getOppositePlayer = (currentPlayer: PieceString) => (currentPlayer === "red") ? "black" : "red";

    multipleCapturesDetectionFlag = (rowIndex: number, colIndex: number): boolean => {
        let hasMoreCaptures: boolean = false;
        let capturingMoves: SquareInfo[] = [];
        let forwardDirection: number;
        let middlePieceRow: number, middlePieceCol: number;

        // si es peon
        if (this.grid[rowIndex][colIndex].getColor() !== "none" && !this.grid[rowIndex][colIndex].getIsKing()) {
            forwardDirection = this.grid[rowIndex][colIndex].getColor() === 'red' ? -1 : 1;
            // Los movimientos de captura
            capturingMoves = [
                { row: rowIndex + forwardDirection * 2, col: colIndex - 2 }, // Diagonal izq
                { row: rowIndex + forwardDirection * 2, col: colIndex + 2 }, // Diagonal der
            ];
            // si es rey
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
                return ;
            }
        });

        //return false;
        return hasMoreCaptures;
    };


    handleSquareOnClickEvent = (rowIndex: number, colIndex: number): void => {
        // Si la casilla seleccionada no es de nuestro turno, no se hace nada
        if (this.grid[rowIndex][colIndex].getColor() === this.getOppositePlayer(this.turnOwner)) {
            return;
        }
        // Si ya hay una ficha-dama seleccionada entonces se buscan los movimientos validos
        if (this.selectedPiece) {
            // Si la misma ficha es clickeada otra vez... la deseleccionamos
            if (this.selectedPiece.row === rowIndex && this.selectedPiece.col === colIndex) {
                this.setSelectedPiece(null);
                this.setValidMoves([]);
                return;
            }
            // Se checkea si la casilla clickeada es un movimiento valido para verificar si se puede realizar un movimiento o no
            if (this.validMovesList.some(move => move.row === rowIndex && move.col === colIndex)) {
                this.movePiece(rowIndex, colIndex, this.selectedPiece);
            }
        } else {
            // Chequea si la casilla seleccionada contiene una ficha-dama de algun color antes de ser seleccionada y calcular sus posibles movim..
            if (this.grid[rowIndex][colIndex].getColor() !== 'none') {
                // Si la ficha es clickeada, la ponemos como seleccionada y calculamos y mostramos sus posibles jugadas-movimientos validos que puede realizar
                this.setSelectedPiece({ row: rowIndex, col: colIndex });
                this.calculateValidMoves(rowIndex, colIndex);
            }
        }
    };

    movePiece = (rowIndex: number, colIndex: number, selectedPiece: SquareInfo): void => {
        // Aca se mueve la ficha si o si: se intercambian lugares
        const newBoard = [...this.grid];
        //newBoard[rowIndex][colIndex] = newBoard[selectedPiece.row][selectedPiece.col];
        newBoard[rowIndex][colIndex].setColor(newBoard[selectedPiece.row][selectedPiece.col].getColor());
        //newBoard[selectedPiece.row][selectedPiece.col] = 'none';
        newBoard[selectedPiece.row][selectedPiece.col].setColor('none');

        // Si es reyna, hacemos que la corona siga con la dama en su posicion
        if (newBoard[selectedPiece.row][selectedPiece.col].getIsKing()) {
            newBoard[rowIndex][colIndex].setIsKing(true);
            newBoard[selectedPiece.row][selectedPiece.col].setIsKing(false);
        }

        // Para ver si la dama captura algo
        let itCapturedFlag: boolean = false;
        let actualizedCapturedPiecesCounterObject: PointCounterInfo = { red: 0, black: 0 };
        // tiene que ser la diferencia entre la ficha futura y la actual 2 por la abscisa y ordenada para recien capturar
        if (Math.abs(rowIndex - selectedPiece.row) === 2 && Math.abs(colIndex - selectedPiece.col) === 2) {
            
            // Se realiza la funcionalidad de capturar la ficha del equipo contrario
            // usando "vector direccion": vector = (casilla_actual - selectedPiece) -> vector/2 = (casilla_actual - selectedPiece)/2
            // casilla_actual = (rowIndex, colIndex) 
            // middlePiece = selectedPiece + vector/2
            const middlePieceRow = selectedPiece.row + (rowIndex - selectedPiece.row) / 2;
            const middlePieceCol = selectedPiece.col + (colIndex - selectedPiece.col) / 2;

            newBoard[middlePieceRow][middlePieceCol].setColor('none'); // Elimina la pieza capturada-comida
            newBoard[middlePieceRow][middlePieceCol].setIsKing(false); // Le quita la corona independientemente si es rey o no

            // Se actualiza la puntuacion
            const turnOwnerResult = this.turnOwner === "red" ? this.capturedPiecesCounter["red"] : this.capturedPiecesCounter["black"];
            actualizedCapturedPiecesCounterObject = { ...this.capturedPiecesCounter, [this.turnOwner]: turnOwnerResult + 1 };
            //console.log("actualizedCapturedPiecesCounterObject");
            this.setCapturedPiecesCounter(actualizedCapturedPiecesCounterObject);
            //console.log(this.capturedPiecesCounter);
            itCapturedFlag = true;
        }
        
        if (
            (newBoard[rowIndex][colIndex].getColor() === 'red' && rowIndex === 0) ||
            (newBoard[rowIndex][colIndex].getColor() === 'black' && rowIndex === this.BOARD_SIZE - 1)
        ) {
            newBoard[rowIndex][colIndex].setIsKing(true);
        }

        this.setGrid(newBoard);

        //console.log(this.capturedPiecesCounter);
        if (this.capturedPiecesCounter.black === 12 || this.capturedPiecesCounter.red === 12) {
        //if (actualizedCapturedPiecesCounterObject.black === 12 || actualizedCapturedPiecesCounterObject.red === 12) {
            //console.log("WINNER", this.turnOwner);
            this.setWinnerPlayer(this.turnOwner);
            this.setTurnOwner('none');
            return;
        }

        // una vez que se captura la ficha, vemos si se cambia el turno o no
        // tiene que no haber opcion de captura multiple y tiene que haber capturado algo
        console.log("this.multipleCapturesDetectionFlag(rowIndex, colIndex), itCaptured");
        console.log(this.multipleCapturesDetectionFlag(rowIndex, colIndex), itCapturedFlag);
        if (!this.multipleCapturesDetectionFlag(rowIndex, colIndex) || !itCapturedFlag) {
            this.setTurnOwner(this.turnOwner === 'red' ? 'black' : 'red');
        }

        // Limpiamos la pieza seleccionada y los movimientos validos
        this.setSelectedPiece(null);
        this.setValidMoves([]);
    }

    // Funcion para calcular los movimientos validos de una pieza seleccionada
    calculateValidMoves = (rowIndex: number, colIndex: number) => {
        const piece = this.grid[rowIndex][colIndex];
        console.log("piece", piece);
        // aca se guardan los movimientos posibles
        let validMovesForPiece: SquareInfo[] = [];

        // para las damas peon
        if (piece.getColor() !== "none" && !this.grid[rowIndex][colIndex].getIsKing()) {
            const forwardDirection = piece.getColor() === 'red' ? -1 : 1;
            const pawnPossibleMoves = [
                { row: rowIndex + forwardDirection, col: colIndex - 1 }, // Diagonal izq
                { row: rowIndex + forwardDirection, col: colIndex + 1 }, // Diagonal der
            ];
            // Los movimientos de captura
            const pawnCapturingMoves = [
                { row: rowIndex + forwardDirection * 2, col: colIndex - 2 }, // Diagonal izq
                { row: rowIndex + forwardDirection * 2, col: colIndex + 2 }, // Diagonal der
            ];
            validMovesForPiece = this.getValidMovesToDo(pawnPossibleMoves, pawnCapturingMoves, false, rowIndex, colIndex);

        // para las damas reinas
        } else if (piece.getColor() !== "none" && piece.getIsKing()) {
            // Checkea movimientos diagonales para las fichas reinas
            const kingDiagonalMoves = [
                // abajo
                { row: rowIndex + 1, col: colIndex - 1 },
                { row: rowIndex + 1, col: colIndex + 1 },
                // arriba
                { row: rowIndex - 1, col: colIndex - 1 },
                { row: rowIndex - 1, col: colIndex + 1 },
            ];
            // Checkea movimientos de captura  para las fichas reinas
            const kingCapturingMoves = [
                // abajo
                { row: rowIndex + 2, col: colIndex - 2 },
                { row: rowIndex + 2, col: colIndex + 2 },
                // arriba
                { row: rowIndex - 2, col: colIndex - 2 },
                { row: rowIndex - 2, col: colIndex + 2 },
            ];
            validMovesForPiece = this.getValidMovesToDo(kingDiagonalMoves, kingCapturingMoves, true, rowIndex, colIndex);
        }
        this.setValidMoves(validMovesForPiece);
    };

    getValidMovesToDo = (
        possibleMoves: SquareInfo[], 
        capturingMoves: SquareInfo[], 
        isKing: boolean, 
        rowIndex: number, 
        colIndex: number
    ): SquareInfo[] => {

        const piece = this.grid[rowIndex][colIndex];
        const forwardDirection = piece.getColor() === 'red' ? -1 : 1;
        // aca se guardan los movimientos posibles
        const validMovesForPiece: SquareInfo[] = [];
        possibleMoves.forEach(move => {
            const [row, col] = [move.row, move.col];
            // para verificar si es válido y añadirlo como posible
            if (row >= 0 && row < this.BOARD_SIZE && col >= 0 && col < this.BOARD_SIZE && this.grid[row][col].getColor() === 'none') {
                validMovesForPiece.push({ row, col });
            }
        });
        capturingMoves.forEach(move => {
            const [row, col] = [move.row, move.col];
            let middlePieceRow, middlePieceCol;

            if (isKing) {
                // vector = (casilla_futura - casilla_actual)
                middlePieceRow = rowIndex + (move.row - rowIndex) / 2;
                middlePieceCol = colIndex + (move.col - colIndex) / 2;
                // middlePiece = casilla_actual + vector/2
            } else {
                middlePieceRow = rowIndex + forwardDirection;
                middlePieceCol = (colIndex + col) / 2;
                // basicamente: colIndex + |-2| o colIndex + forwardDirection
            }
            console.log("turnOwner", this.turnOwner)

            if (
                // condiciones de existencia
                row >= 0 && row < this.BOARD_SIZE && col >= 0 && col < this.BOARD_SIZE &&
                // que la casilla trasera diagonal de la opuesta nos podamos mover
                this.grid[row][col].getColor() === 'none' &&
                // que al que va a comer no sea nulo
                this.grid[middlePieceRow][middlePieceCol].getColor() !== 'none' &&
                // no es del mismo color
                this.grid[middlePieceRow][middlePieceCol].getColor() !== this.turnOwner
            ) {
                validMovesForPiece.push({ row, col });
            }
        });

        return validMovesForPiece;
    }
}