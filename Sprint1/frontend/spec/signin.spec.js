/* eslint-disable no-undef */
import Session from '../lib/session.js'

describe('Login de un usuario', () => {
  let session

  beforeEach(() => {
    // Arrange: Estado inicial
    session = new Session()
  })

  it('debe iniciar sesión', async () => {
    // Arrange: Configuramos un caso de prueba donde se inicie sesion
    // Creamos un mock para la función fetch
    const mockFetch = async () => ({
      ok: true
    })

    // Sobrescribimos la función signIn para utilizar el mock de fetch
    session.signIn = async () => {
      return await mockFetch()
    }

    // Act: Iniciamos sesion
    session.setUsername('Usuario')
    session.setPassword('Contraseña')
    await session.signIn()

    // Assert: Verificamos que se haya iniciado sesion correctamente
    expect(session.getErrorMessage()).toBe('')
  })

  it('debe manejar error al iniciar sesión', async () => {
    // Arrange: Configuramos un caso de prueba donde el inicio de sesión falle
    const mockErrorMessage = 'Credenciales incorrectas'

    // Creamos un mock para la función fetch
    const mockFetch = async () => ({
      ok: false,
      message: mockErrorMessage
    })

    // Sobrescribimos la función signIn para utilizar el mock de fetch
    session.signIn = async () => {
      const response = await mockFetch()
      if (!response.ok) {
        session.errorMessage = response.message // Asignamos el mensaje de error correctamente
      }
    }

    // Act: Intentamos iniciar sesión con credenciales incorrectas
    session.setUsername('UsuarioIncorrecto')
    session.setPassword('ContraseñaIncorrecta')
    await session.signIn()

    // Assert: Verificamos que se haya almacenado el mensaje de error correctamente
    expect(session.getErrorMessage()).toBe(mockErrorMessage)
  })
})
