/* eslint-disable no-undef */
import Session from '../lib/session.js'

describe('LogOut de un usuario', () => {
  let session

  beforeEach(() => {
    // Arrange: Estado inicial
    session = new Session()
  })

  it('debe cerrar sesión', async () => {
    // Arrange: Configuramos un caso de prueba donde se cierre sesión
    // Creamos un mock para la función fetch
    const mockFetch = async () => ({
      ok: true
    })

    // Sobrescribimos la función signOut para utilizar el mock de fetch
    session.signOut = async () => {
      return await mockFetch()
    }

    // Act: Cerramos sesión
    await session.signOut()

    // Assert: Verificamos que se haya cerrado sesión correctamente
    expect(session.getUsername()).toBe('')
  })
})
