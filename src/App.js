// import logo from './logo.svg'
// import './App.css'
// import Button from '@material-ui/core/Button'
// import SaveIcon from '@material-ui/icons/Save'
// import NavBar from './components/NavBar_Old'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Position from './components/tools/Position'
import AppBar from './components/AppBar'
// import { ThemeProvider } from '@material-ui/core/styles'
// import theme from './theme'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Router>
        <AppBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
        <Position />
      </Router>
    )
  }
}
