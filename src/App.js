// import logo from './logo.svg'
// import './App.css'
// import Button from '@material-ui/core/Button'
// import SaveIcon from '@material-ui/icons/Save'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
// import { ThemeProvider } from '@material-ui/core/styles'
// import theme from './theme'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Home exact path='/' />
          <About path='/about' />
        </Switch>
      </Router>
    )
  }
}
