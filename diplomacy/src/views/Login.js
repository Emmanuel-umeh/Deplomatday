import React,{Component} from 'react'
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: "signUp"
    }
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
          <form style = {{width : "100%"}}>
            <h2 style={{color:"black"}}>Sign Up!</h2>
            <fieldset>
              <legend style={{color:"black"}}>Create Account</legend>
              <ul>
                <li>
                  <label style={{color:"black"}} for="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label  style={{color:"black"}} for="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                
                
                <li>
                  <label style={{color:"black"}} for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
        )
        break
      case "logIn":
        return (
          <form>
            <h2 style={{color:"black"}}>Welcome Back!</h2>
            <fieldset>
              <legend style={{color:"black"}}> Log In</legend>
              <ul>
                <li>
                  <label for="username" style={{color:"black"}}>Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="password" style={{color:"black"}}>Password:</label>
                  <input type="password" id="password" required/>
                </li>
                <li>
                  <i/>
                  <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
          </form>
        )
        break
      case "PWReset":
        return (
          <form>
          <h2 style={{color:"black"}}>Reset Password</h2>
          <fieldset>
            <legend style={{color:"black"}}>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label style={{color:"black"}} for="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
        )
      default:
        break
    }
  }


  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}

 