import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      userData: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const userData = { ...this.state.userData, [e.target.name]: e.target.value }
    this.setState({ userData })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Register for a Beano account</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input 
                  className="input"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email Address</label>
              <div className="control">
                <input 
                  className="input"
                  name="email"
                  placeholder="Email Address"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input 
                  className="input"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Confirm your password</label>
              <div className="control">
                <input 
                  className="input"
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  type="password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button onSubmit={this.handleSubmit} type="submit" className="button is-info">Register!</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Register