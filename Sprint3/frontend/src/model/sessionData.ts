class SessionData {
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
  getEmail(): string {
    return this.email
  }
  getPassword(): string {
    return this.password
  }
  getUsername(): string {
    return this.username
  }
}

export default SessionData
