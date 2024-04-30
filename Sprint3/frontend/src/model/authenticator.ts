/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom'

interface AuthStrategy {
  signIn(username: string, password: string): Promise<void>
  signUp(username: string, email: string, password: string): Promise<void>
  logOut(): Promise<void>
}

class RestAuthStrategy implements AuthStrategy {
  private navigate: any

  constructor() {
    this.navigate = useNavigate()
  }

  async signIn(username: string, password: string) {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const data = await response.json()
    if (response.ok) {
      alert(data.message)
      this.navigate('/board')
    } else {
      const errorMessage = 'error'
      alert(errorMessage)
    }
  }

  async signUp(username: string, email: string, password: string) {
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
    const data = await response.json()
    if (response.ok) {
      alert(data.message)
    } else {
      const errorMessage = 'error'
      alert(errorMessage)
    }
  }

  async logOut() {
    const response = await fetch('http://127.0.0.1:5000/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    if (response.ok) {
      alert(data.message)
      this.navigate('/')
    } else {
      alert('Error al cerrar sesión')
    }
  }
}

export default RestAuthStrategy
