class Session {
  constructor() {
    this.username = ''
    this.password = ''
    this.email = ''
    this.errorMessage = ''
  }

  setUsername(username) {
    this.username = username
  }

  getUsername() {
    return this.username
  }

  setPassword(password) {
    this.password = password
  }

  setEmail(email) {
    this.email = email
  }

  getEmail() {
    return this.email
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
      alert('Error al cerrar sesión')
    }
  }
}

export default Session
