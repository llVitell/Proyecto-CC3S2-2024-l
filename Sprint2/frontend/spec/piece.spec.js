/* eslint-disable no-undef */
import Piece from '../lib/piece.js';

describe('Piezas del tablero', () => {
    let piece;

    it('debe establecer el color de la pieza', () => {
        // Arrange: Estado inicial
        piece = new Piece('red');

        // Act: Llamamos al método setColor() con un nuevo color
        piece.setColor('black');

        // Assert: Verificamos que el color de la pieza haya cambiado correctamente
        expect(piece.getColor()).toEqual('black');
    });

    it('debe comer la pieza contraria', () => {
        // Arrange: Estado inicial
        const board = [
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('black'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')],
            [new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none')],
            [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')]
          ];

        // Act: hacemos que el elemento [7][0] red del board se coma al elemento [6][1] black
        board[7][0].setColor('none');
        board[6][1].setColor('none');
        board[5][2].setColor('red');
        //piece.setColor('black');

        // Assert: Verificamos que el color de la pieza haya cambiado correctamente
        expect(board[7][0].getColor()).toEqual('none');
        expect(board[6][1].getColor()).toEqual('none');
        expect(board[5][2].getColor()).toEqual('red');
    });

    it('captura multiple', () => {
        // Arrange: Estado inicial
        const board = [
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('black'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none'), new Piece('none')],
            [new Piece('none'), new Piece('black'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')],
            [new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none')],
            [new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red'), new Piece('none'), new Piece('red')]
          ];

        // Act: hacemos que el elemento [6][0] red del board se coma al elemento [5][1] black y al [3][1]
        board[6][0].setColor('none');
        board[5][1].setColor('none');
        board[4][2].setColor('red');
        // segunda captura
        board[4][2].setColor('none');
        board[3][1].setColor('none');
        board[2][0].setColor('red');

        // Assert: Verificamos que el color de la pieza haya cambiado correctamente
        expect(board[5][1].getColor()).toEqual('none');
        expect(board[4][2].getColor()).toEqual('none');
        expect(board[3][1].getColor()).toEqual('none');
        expect(board[2][0].getColor()).toEqual('red');
    });

});
