import React from 'react'
import { Provider } from '../lib/react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'

const Root = ({ store }) =>
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={App} />
    </Router>
  </Provider>

export default Root