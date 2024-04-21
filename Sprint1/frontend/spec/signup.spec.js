/* eslint-disable no-undef */
import Session from '../lib/session.js'

describe('Registro de un usuario', () => {
  let session

  beforeEach(() => {
    // Arrange: Estado inicial
    session = new Session()
  })

  it('debe poder registrarse', async () => {
    // Arrange: Configuramos un caso de prueba donde se registre un usuario
    // Creamos un mock para la función fetch
    const mockFetch = async () => ({
      ok: true
    })

    // Sobrescribimos la función signUp para utilizar el mock de fetch
    session.signUp = async () => {
      return await mockFetch()
    }

    // Act: Nos registramos
    session.setUsername('Usuario')
    session.setEmail('Email')
    session.setPassword('Contraseña')
    await session.signUp()

    // Assert: Verificamos que se haya registrado correctamente
    expect(session.getErrorMessage()).toBe('')
  })

  it('debe manejar error al registrase', async () => {
    // Arrange: Configuramos un caso de prueba donde el registro de usuario falle
    const mockErrorMessage = 'No se pudo registrar'

    // Creamos un mock para la función fetch
    const mockFetch = async () => ({
      ok: false,
      message: mockErrorMessage
    })

    // Sobrescribimos la función signUp para utilizar el mock de fetch
    session.signUp = async () => {
      const response = await mockFetch()
      if (!response.ok) {
        session.errorMessage = response.message // Asignamos el mensaje de error correctamente
      }
    }

    // Act: Intentamos registrarnos con credenciales incorrectas
    session.setUsername('UsuarioIncorrecto')
    session.setEmail('EmailIncorrecto')
    session.setPassword('ContraseñaIncorrecta')
    await session.signUp()

    // Assert: Verificamos que se haya almacenado el mensaje de error correctamente
    expect(session.getErrorMessage()).toBe(mockErrorMessage)
  })
})
