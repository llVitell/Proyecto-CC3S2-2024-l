/* eslint-disable no-undef */
import Board from '../lib/board.js';
import Piece from '../lib/piece.js';

describe('Funcionalidad del tablero', () => {
    let board;

    // HU-6 Movimiento de una pieza
    describe('Movimiento de una dama', () => {
        beforeEach(() => {
            // Arrange: Estado inicial
            board = new Board()
        })

        // AC-6.1 Ver los posibles movimientos de la dama
        it('Ver los posibles movimientos de la dama', () => {
            // Act: Llamamos al método setColor() con un nuevo color
            board.handleSquareOnClickEvent(5, 1);
    
            // Assert: Verificamos que el color de la pieza haya cambiado correctamente
            expect(board.getSelectedPiece()).toEqual({row: 5, col: 1});
            expect(board.getValidMovesList()).toEqual([{row: 4, col: 0}, {row: 4, col: 2}]);
        });
    
        // AC-6.2 Ejecucion del movimiento de avance de la dama
        it('Ejecucion del movimiento de avance de la dama', () => {
            // Act: Llamamos al método setColor() con un nuevo color
            board.handleSquareOnClickEvent(5, 1);
            // Assert: Verificamos que el color de la pieza haya cambiado correctamente
            expect(board.getSelectedPiece()).toEqual({row: 5, col: 1});
            expect(board.getValidMovesList()).toEqual([{row: 4, col: 0}, {row: 4, col: 2}]);
    
            board.handleSquareOnClickEvent(4, 2);
            expect(board.getGrid()[4][2].getColor()).toEqual('red');
            expect(board.getGrid()[5][1].getColor()).toEqual('none');
            expect(board.getSelectedPiece()).toEqual(null);
            expect(board.getValidMovesList()).toEqual([]);
        });
    })

    // HU-7 Coronación de una pieza
    // AC-7.1 Conversion de la dama de peon a reina
    it('Conversion de la dama de peon a reina', () => {
        // Arrange: Estado inicial

        // Dado una ficha dama peon de mi equipo rojo. Y esta está a una casilla atras del borde limite del equipo negro. 
        board = new Board([
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black')],
            [new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')]
        ]);

        board.handleSquareOnClickEvent(1, 1);
        expect(board.getSelectedPiece()).toEqual({row: 1, col: 1});
        expect(board.getValidMovesList()).toEqual([{row: 0, col: 0}, {row: 0, col: 2}]);

        // Cuando hago el movimiento de avance a esa casilla.
        board.handleSquareOnClickEvent(0, 2);
        expect(board.getGrid()[0][2].getColor()).toEqual('red');
        expect(board.getGrid()[1][1].getColor()).toEqual('none');
        // Entonces mi dama roja debe convertirse en rey
        expect(board.getGrid()[0][2].getIsKing()).toEqual(true);
        expect(board.getSelectedPiece()).toEqual(null);
        expect(board.getValidMovesList()).toEqual([]);
    });

    // HU-8 Movimientos de captura
    describe('Movimientos de captura', () => {
        // AC-8.1 Captura de una ficha siendo peon
        it('Captura de una ficha siendo peon', () => {
            // Arrange: Estado inicial

            // Dado una ficha peon de mi equipo rojo. Y hay una ficha del equipo negro una casilla por delante (diagonalmente). 
            board = new Board([
                [new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
                [new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black')],
                [new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')],
                [new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none')],
                [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')]
            ]);
    
            board.handleSquareOnClickEvent(5, 1);
            expect(board.getSelectedPiece()).toEqual({row: 5, col: 1});
            expect(board.getValidMovesList()).toEqual([{row: 4, col: 0}, {row: 3, col: 3}]);
    
            // Cuando hago el movimiento de capturar a esa ficha. 
            board.handleSquareOnClickEvent(3, 3);
            // Entonces se debe desaparecer a esa ficha. 
            expect(board.getGrid()[4][2].getColor()).toEqual('none');
            // Y hacer movimiento de avance para la ficha de mi equipo. 
            expect(board.getGrid()[3][3].getColor()).toEqual('red');

            // Y añadir un punto al contador de capturas de mi equipo.
            expect(board.getCapturedPiecesCounter()).toEqual({red: 1, black: 0});
            expect(board.getSelectedPiece()).toEqual(null);
            expect(board.getValidMovesList()).toEqual([]);
        });
    
        // AC-8.2 Captura de una ficha siendo reina
        it('Captura de una ficha siendo reina', () => {
            // Arrange: Estado inicial
            // Dado una ficha de mi equipo rojo que ya es reina. Y hay una ficha del equipo negro solo una casilla diagonalmente por delante o atrás (tanto izquierda o derecha). 
            board = new Board([
                [new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
                [new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black')],
                [new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
                [new Piece('none'), new Piece('red', true), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')],
                [new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none')],
                [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')]
            ]);
            
            board.handleSquareOnClickEvent(3, 1);
            expect(board.getSelectedPiece()).toEqual({row: 3, col: 1});
            expect(board.getValidMovesList()).toEqual([{row: 4, col: 0}, {row: 2, col: 2}, {row: 5, col: 3}]);

            // Cuando hago el movimiento de capturar a esa ficha.
            board.handleSquareOnClickEvent(5, 3);
            // Entonces se debe desaparecer a esa ficha.
            expect(board.getGrid()[4][2].getColor()).toEqual('none');
            // Y hacer movimiento de avance para la ficha de mi equipo.
            expect(board.getGrid()[5][3].getColor()).toEqual('red');
            expect(board.getGrid()[5][3].getIsKing()).toEqual(true);

            // Y añadir un punto al contador de capturas de mi equipo.
            expect(board.getCapturedPiecesCounter()).toEqual({red: 1, black: 0});
            expect(board.getSelectedPiece()).toEqual(null);
            expect(board.getValidMovesList()).toEqual([]);

        });
    });

    // HU-9 Captura de más de una pieza en solamente un turno
    describe('Captura multiple en solamente un turno', () => {

        // AC-9.1 Realizar captura multiple siendo peon
        it('Realizar captura multiple siendo peon', () => {
            // Arrange: Estado inicial
            board = new Board([
                [new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
                [new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black')],
                [new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black')],
                [new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')],
                [new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none')],
                [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')]
            ])
    
            // Act: Llamamos al método setColor() con un nuevo color
            board.handleSquareOnClickEvent(5, 1);
            expect(board.getSelectedPiece()).toEqual({row: 5, col: 1});
            expect(board.getValidMovesList()).toEqual([{row: 4, col: 0}, {row: 3, col: 3}]);

            // Dado una captura realizada de nuestra ficha roja peon.
            board.handleSquareOnClickEvent(3, 3);
            expect(board.getGrid()[5][1].getColor()).toEqual('none');
            expect(board.getGrid()[4][2].getColor()).toEqual('none');
            expect(board.getGrid()[3][3].getColor()).toEqual('red');
            
            // el turno permanece con nosotros porque podemos hacer captura multiple
            expect(board.getTurnOwner()).toEqual('red');
    
            // Cuando se ve que se puede capturar una ficha negra mas.
            board.handleSquareOnClickEvent(3, 3);
            expect(board.getSelectedPiece()).toEqual({row: 3, col: 3});
            expect(board.getValidMovesList()).toEqual([{row: 2, col: 2}, {row: 1, col: 5}]);
    
            // Entonces todavía no se cambia de turno para hacer otra captura. Y seguimos con nuestro turno.
            board.handleSquareOnClickEvent(1, 5);
            expect(board.getGrid()[3][3].getColor()).toEqual('none');
            expect(board.getGrid()[2][4].getColor()).toEqual('none');
            expect(board.getGrid()[1][5].getColor()).toEqual('red');

            expect(board.getCapturedPiecesCounter()).toEqual({red: 2, black: 0});
            expect(board.getTurnOwner()).toEqual('black');
        });
    
        // AC-9.2 Realizar captura multiple siendo reina
        it('Realizar captura multiple siendo reina', () => {
            // Arrange: Estado inicial
            board = new Board([
                [new Piece('none'), new Piece('none'), new Piece('red', true), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black')],
                [new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black')],
                [new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')]
            ]);
    
            board.handleSquareOnClickEvent(0, 2);
            expect(board.getSelectedPiece()).toEqual({row: 0, col: 2});
            expect(board.getValidMovesList()).toEqual([{row: 1, col: 1}, {row: 2, col: 4}]);
            
            board.handleSquareOnClickEvent(2, 4);
            expect(board.getGrid()[0][2].getColor()).toEqual('none');
            expect(board.getGrid()[1][3].getColor()).toEqual('none');
            expect(board.getGrid()[2][4].getColor()).toEqual('red');
            
            // el turno permanece con nosotros porque podemos hacer captura multiple
            expect(board.getTurnOwner()).toEqual('red');
    
            board.handleSquareOnClickEvent(2, 4);
            expect(board.getSelectedPiece()).toEqual({row: 2, col: 4});
            expect(board.getValidMovesList()).toEqual([{row: 3, col: 3}, {row: 1, col: 3}, {row: 1, col: 5}, {row: 4, col: 6}]);
    
            // 
            board.handleSquareOnClickEvent(4, 6);
            expect(board.getGrid()[2][4].getColor()).toEqual('none');
            expect(board.getGrid()[3][5].getColor()).toEqual('none');
            expect(board.getGrid()[4][6].getColor()).toEqual('red');

            expect(board.getCapturedPiecesCounter()).toEqual({red: 2, black: 0});
            expect(board.getTurnOwner()).toEqual('black');
        });
    })

});