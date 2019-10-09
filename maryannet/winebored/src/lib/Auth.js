class Auth {
  static setToken(token) {
    localStorage.setToken('token', token)
  }
  static getToken() {
    return localStorage.getItem('token')
  }
}

export default Auth