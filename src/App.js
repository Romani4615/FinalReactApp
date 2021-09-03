import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostDetail from './components/PostDetail';
import About from './views/About';
import CreatePost from './views/CreatePost';
import CreateUser from './views/CreateUser';
import Home from './views/Home';
import Login from './views/Login';
import Posts from './views/Posts';
import SingleUser from './views/SingleUser';
import Users from './views/Users';

export default class App extends Component {
  constructor(props){        // FIRST TO RUN
    super(props);
    console.log('component constructing...')
    this.state = {
      isLoggedIn: false,
      // redirect: ''
    }
  }
  
handleLogIn = (e) => {  // onsubmit in login runs this function with this.props.handlelogin
  e.preventDefault(); //stops from re running
  console.log(e);
  // Grab data from form
  const username = e.target.username.value;
  const password = e.target.password.value;

  let myHeaders = new Headers();
  const credentials = btoa(`${username}:${password}`);
  myHeaders.append('Authorization', 'Basic ' + credentials); // dont forget the space

  fetch('http://localhost:5000/tokens', {
    method: 'POST',
    headers: myHeaders
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    this.setState({
      isLoggedIn: true,
    })
    console.log("trying to redirect")
    localStorage.setItem('token', data.token)  //hover set item
      //dependent on if user is logged in  setState({redirect: '/'})

  })
}
//in console, you can now look
// localStorage.getItem("token")
//"4rDr5FLM0CoDxu8qvL4J7v5S/mCeCJWh"
handleLogOut = () => {
  localStorage.removeItem('token');
  this.setState({
    isLoggedIn: false
  })
}



  render() {                // SECOND TO RUN, NEEDS TO RENDER FIRST, MOUNTING TO THE DOM ..PROPS line 38
    console.log("component Rendering...")
    return (
      <div>
        <Navbar isLoggedIn={this.state.isLoggedIn} logOut={this.handleLogOut}/>
        <div className="container">
          <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users /> 
          </Route>
          <Route exact path="/posts">
            <Posts /> 
          </Route>
          <Route exact path="/create-post">
            <CreatePost /> 
          </Route>
            <Route exact path="/create-user">
            <CreateUser /> 
          </Route>
            <Route exact path="/users/:id" component={SingleUser} />
            <Route exact path="/posts/:id" component={PostDetail} />
            <Route exact path="/login">
            <Login handleLogIn={this.handleLogIn} /> 
          </Route>
          </Switch>
          {/* <h1>Single Page Test</h1> */}
        </div>
      </div>
   )
  }
}

// myName={myName} updateName={this.updateName} allRacers={this.state.racers}