/* eslint-disable no-undef */
import Board from '../lib/board.js';
import Piece from '../lib/piece.js';

describe('Funcionalidad del tablero', () => {
    let board;

    describe('Movimiento', () => {
        beforeEach(() => {
            // Arrange: Estado inicial
            board = new Board()
        })

        it('ver posibles movimientos de la Dama', () => {
            // Arrange: Estado inicial
            //board = new Board()
            // Act: Llamamos al método setColor() con un nuevo color
            board.handleSquareOnClickEvent(5, 1);
    
            // Assert: Verificamos que el color de la pieza haya cambiado correctamente
            expect(board.getSelectedPiece()).toEqual({row: 5, col: 1});
            expect(board.getValidMovesList()).toEqual([{row: 4, col: 0}, {row: 4, col: 2}]);
        });
    
        it('ejecutar movimiento de la dama', () => {
            // Arrange: Estado inicial
            //board = new Board()
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

    it('conversion de la dama de peon a reina', () => {
        // Arrange: Estado inicial
        board = new Board([
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black')],
            [new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')]
        ])

        // Act: Llamamos al método setColor() con un nuevo color
        board.handleSquareOnClickEvent(1, 1);
        // Assert: Verificamos que el color de la pieza haya cambiado correctamente
        expect(board.getSelectedPiece()).toEqual({row: 1, col: 1});
        expect(board.getValidMovesList()).toEqual([{row: 0, col: 0}, {row: 0, col: 2}]);

        board.handleSquareOnClickEvent(0, 2);
        expect(board.getGrid()[0][2].getColor()).toEqual('red');
        expect(board.getGrid()[1][1].getColor()).toEqual('none');
        expect(board.getGrid()[0][2].getIsKing()).toEqual(true);
        expect(board.getSelectedPiece()).toEqual(null);
        expect(board.getValidMovesList()).toEqual([]);
    });

    describe('movimientos de captura', () => {
        it('captura de una ficha siendo peon', () => {
            // Arrange: Estado inicial
            board = new Board([
                [new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
                [new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black')],
                [new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')],
                [new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none')],
                [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')]
            ])
    
            // Act: Llamamos al método setColor() con un nuevo color
            board.handleSquareOnClickEvent(5, 1);
            // Assert: Verificamos que el color de la pieza haya cambiado correctamente
            expect(board.getSelectedPiece()).toEqual({row: 5, col: 1});
            expect(board.getValidMovesList()).toEqual([{row: 4, col: 0}, {row: 3, col: 3}]);
    
            board.handleSquareOnClickEvent(3, 3);
            // Assert: Verificamos que el color de la pieza haya cambiado correctamente
            expect(board.getGrid()[3][3].getColor()).toEqual('red');
            expect(board.getGrid()[4][2].getColor()).toEqual('none');
            expect(board.getSelectedPiece()).toEqual(null);
            expect(board.getValidMovesList()).toEqual([]);
        });
    
        it('captura de una ficha siendo rey', () => {
            // Arrange: Estado inicial
            board = new Board([
                [new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
                [new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black')],
                [new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('black'), new Piece('none')],
                [new Piece('none'), new Piece('red', true), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
                [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')],
                [new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none')],
                [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')]
            ])
    
            // Act: Llamamos al método setColor() con un nuevo color
            board.handleSquareOnClickEvent(3, 1);
            // Assert: Verificamos que el color de la pieza haya cambiado correctamente
            expect(board.getSelectedPiece()).toEqual({row: 3, col: 1});
            expect(board.getValidMovesList()).toEqual([{row: 4, col: 0}, {row: 2, col: 2}, {row: 5, col: 3}]);
            board.handleSquareOnClickEvent(5, 3);
            // Assert: Verificamos que el color de la pieza haya cambiado correctamente
            //expect(board.getGrid()[4][2].getColor()).toEqual('none');
            //expect(board.getSelectedPiece()).toEqual(null);
            expect(board.getGrid()[4][2].getColor()).toEqual('none');
            expect(board.getGrid()[5][3].getColor()).toEqual('red');
            expect(board.getGrid()[5][3].getIsKing()).toEqual(true);
            expect(board.getSelectedPiece()).toEqual(null);
            expect(board.getValidMovesList()).toEqual([]);
        });
    });

    describe('captura multiple', () => {
        it('realizar captura multiple siendo peon', () => {
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
            // Assert: Verificamos que el color de la pieza haya cambiado correctamente
            expect(board.getSelectedPiece()).toEqual({row: 5, col: 1});
            expect(board.getValidMovesList()).toEqual([{row: 4, col: 0}, {row: 3, col: 3}]);
            board.handleSquareOnClickEvent(3, 3);
            // Assert: Verificamos que el color de la pieza haya cambiado correctamente
            //expect(board.getGrid()[4][2].getColor()).toEqual('none');
            //expect(board.getSelectedPiece()).toEqual(null);
            expect(board.getGrid()[5][1].getColor()).toEqual('none');
            expect(board.getGrid()[4][2].getColor()).toEqual('none');
            expect(board.getGrid()[3][3].getColor()).toEqual('red');
            
            // el turno permanece con nosotros porque podemos hacer captura multiple
            expect(board.getTurnOwner()).toEqual('red');
    
            board.handleSquareOnClickEvent(3, 3);
            expect(board.getSelectedPiece()).toEqual({row: 3, col: 3});
            expect(board.getValidMovesList()).toEqual([{row: 2, col: 2}, {row: 1, col: 5}]);
    
            board.handleSquareOnClickEvent(1, 5);
            expect(board.getGrid()[3][3].getColor()).toEqual('none');
            expect(board.getGrid()[2][4].getColor()).toEqual('none');
            expect(board.getGrid()[1][5].getColor()).toEqual('red');
            expect(board.getTurnOwner()).toEqual('black');
        });
    
        it('realizar captura multiple siendo reina', () => {
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
    
            // Act: Llamamos al método setColor() con un nuevo color
            board.handleSquareOnClickEvent(0, 2);
            // Assert: Verificamos que el color de la pieza haya cambiado correctamente
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
    
            board.handleSquareOnClickEvent(4, 6);
            expect(board.getGrid()[2][4].getColor()).toEqual('none');
            expect(board.getGrid()[3][5].getColor()).toEqual('none');
            expect(board.getGrid()[4][6].getColor()).toEqual('red');
            expect(board.getTurnOwner()).toEqual('black');
        });
    })

});