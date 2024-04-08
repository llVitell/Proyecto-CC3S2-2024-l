/* eslint-disable no-undef */
import Piece from '../lib/piece.js';

describe('Piezas del tablero', () => {
    let piece;

    beforeEach(() => {
        piece = new Piece('red');
    });

    it('debe establecer el color de la pieza', () => {
        // Arrange: Estado inicial ya configurado en beforeEach

        // Act: Llamamos al método setColor() con un nuevo color
        piece.setColor('black');

        // Assert: Verificamos que el color de la pieza haya cambiado correctamente
        expect(piece.getColor()).toEqual('black');
    });

});
