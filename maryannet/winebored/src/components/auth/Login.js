import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('clicked')
   
    axios.post('https://winebored.herokuapp.com/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/wines')
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Log In</h2>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit" className="button is-warning">Log In</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Login 