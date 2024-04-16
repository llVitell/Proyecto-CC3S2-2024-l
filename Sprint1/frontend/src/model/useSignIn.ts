/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom'

class SignIn {
  private username: string
  private password: string
  private navigate: any
  private errorMessage: string

  constructor() {
    this.username = ''
    this.password = ''
    this.errorMessage = ''
    this.navigate = useNavigate()
  }

  setUsername(username: string) {
    this.username = username
  }

  setPassword(password: string) {
    this.password = password
  }

  getErrorMessage() {
    return this.errorMessage
  }

  async handleLogin() {
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
}

export default SignIn
