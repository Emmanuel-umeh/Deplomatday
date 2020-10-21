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


  _handleSubmit =(e)=>{
    e.preventDefault()
    // console.log()
    const email = this.email.value
    const witnessEmail = this.witnessEmail.value
    const phoneNumber = this.phoneNumber.value
    const name = this.name.value
    const password = this.password.value
    // const email = this.email.value

    const newUser = {
      email, witnessEmail, phoneNumber, name, password
    }
    // redux action here
    console.log({newUser})

  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
          <form style = {{width : "100%"}} onSubmit ={this._handleSubmit}>
            <h2 style={{color:"black" , marginTop : "-20px"}}>Sign Up!</h2>
            <fieldset>
              <legend style={{color:"black", alignSelf : "center"}}>Create Account</legend>
              <ul>
                <li>
                  <label style={{color:"black"}} for="name">Name:</label>
                  <input type="name" id="name" ref ={(ref)=>this.name = ref} required/>
                </li>

                <li>
                  <label style={{color:"black"}} for="email">Email:</label>
                  <input type="email" id="email" ref ={(ref)=>this.email = ref} required/>
                </li>

                <li>
                  <label style={{color:"black"}} placeholder="Email Of Your Witness" for="witnessemail">Witness:</label>
                  <input type="text" id="witnessemail" ref ={(ref)=>this.witnessEmail = ref} required/>
                </li>
                <li>
                  <label style={{color:"black"}} for="phonenumber">Phone:</label>
                  <input type="tel" id="phonenumber" ref ={(ref)=>this.phoneNumber = ref} required/>
                </li>
                {/* <li>
                  <label  style={{color:"black"}} for="address">Address:</label>
                  <input type="address" id="address" required/>
                </li>
                 */}
                
                <li>
                  <label style={{color:"black"}} for="password">Password:</label>
                  <input ref ={(ref)=>this.password = ref} type="password" id="password" required/>
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

 