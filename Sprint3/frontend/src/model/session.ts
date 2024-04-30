import SessionData from './sessionData'
import RestAuthStrategy from './authenticator'
import AuthStrategy from './authenticator'
import Navigator from './navigator'

class Session {
  private sessionData: SessionData
  private authStrategy: AuthStrategy
  private navigator: Navigator

  constructor() {
    this.sessionData = new SessionData()
    this.authStrategy = new RestAuthStrategy()
    this.navigator = new Navigator()
  }

  setUsername(username: string) {
    this.sessionData.setUsername(username)
  }

  setPassword(password: string) {
    this.sessionData.setPassword(password)
  }

  setEmail(email: string) {
    this.sessionData.setEmail(email)
  }

  async signIn() {
    await this.authStrategy.signIn(
      this.sessionData.getUsername(),
      this.sessionData.getPassword()
    )
    if (!this.sessionData.getErrorMessage()) {
      this.navigator.navigateTo('/board')
    }
  }

  async signUp() {
    await this.authStrategy.signUp(
      this.sessionData.getUsername(),
      this.sessionData.getEmail(),
      this.sessionData.getPassword()
    )
    if (!this.sessionData.getErrorMessage()) {
      this.navigator.navigateTo('/board')
    }
  }

  async logOut() {
    await this.authStrategy.logOut()
    this.navigator.navigateTo('/')
  }
}

export default Session
