import React, {Component} from 'react'
import {Route, Redirect} from 'react-router'
import queryString from "query-string"

class Auth extends Component {
  constructor(props){
    super(props)
    this.state={userToken:null}
    this.authenticate = this.authenticate.bind(this)
    this.isLoggedIn= this.isLoggedIn.bind(this)

  }
  componentWillMount(){
    this.authenticate(this.props.location.hash)
  }

  authenticate = (hash) => {
    const parsedHash = queryString.parse(hash)
    const idToken = parsedHash.id_token
    this.setState({userToken: idToken})
  }

  isLoggedIn = () =>{
    return  this.state.userToken !== null
  }

  render(){
    return (
      <Route render={ (matchProps) => {
          if (this.isLoggedIn()) {
              return (
                <div>
                  <h1> Congrats you are logged in with your Azure AD credential</h1>
                  <h4>User Token</h4>
                  <h4>{this.state.userToken}</h4>
                </div>
               )
          }
          return(
            <Redirect to={{ pathname: "/", state: { from: matchProps.location }}}/>
          )
      } } />
    )
  }
}

export default Auth
