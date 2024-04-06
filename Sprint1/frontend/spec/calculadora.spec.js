/* eslint-disable no-undef */

import sumar from '../calculadora.js'

describe('Sumar', () => {
  it('debería devolver el resultado correcto', () => {
    // Arrange (Preparar)
    const a = 2
    const b = 3

    // Act (Actuar)
    const resultado = sumar(a, b)

    // Assert (Afirmar)
    expect(resultado).toEqual(5) // Esperamos que la suma de 2 y 3 sea igual a 5
  })
})
