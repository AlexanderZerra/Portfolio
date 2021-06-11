import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import ApiClient from './Globals'

import Home from './component/Home'
import Nav from './component/Nav'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Nav />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}
