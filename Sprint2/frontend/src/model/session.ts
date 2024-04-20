/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom'

class Session {
  private username: string
  private password: string
  private email: string
  private errorMessage: string
  private navigate: any

  constructor() {
    this.username = ''
    this.password = ''
    this.email = ''
    this.errorMessage = ''
    this.navigate = useNavigate()
  }

  setUsername(username: string) {
    this.username = username
  }

  setPassword(password: string) {
    this.password = password
  }

  setEmail(email: string) {
    this.email = email
  }

  getErrorMessage() {
    return this.errorMessage
  }

  async signIn() {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.username,
        password: this.password
      })
    })
    const data = await response.json()
    if (response.ok) {
      alert(data.message)
      this.navigate('/board')
    } else {
      this.errorMessage = data.message
      alert(this.errorMessage)
    }
  }

  async signUp() {
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.username,
        email: this.email,
        password: this.password
      })
    })
    const data = await response.json()
    if (response.ok) {
      alert(data.message)
    } else {
      this.errorMessage = data.message
      alert(this.errorMessage)
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

export default Session
