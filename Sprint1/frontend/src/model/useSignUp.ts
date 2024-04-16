/* eslint-disable @typescript-eslint/no-explicit-any */

class SignUp {
  private username: string
  private password: string
  private email: string
  private errorMessage: string

  constructor() {
    this.username = ''
    this.password = ''
    this.email = ''
    this.errorMessage = ''
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

  async handleRegister() {
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
}

export default SignUp
