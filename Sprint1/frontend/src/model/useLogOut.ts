/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom'

class LogOut {
  private navigate: any
  private errorMessage: string

  constructor() {
    this.errorMessage = ''
    this.navigate = useNavigate()
  }

  getErrorMessage() {
    return this.errorMessage
  }

  async handleLogOut() {
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

export default LogOut
