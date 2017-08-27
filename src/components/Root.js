import React from 'react'
import { Provider } from '../lib/react-redux'
import App from './App'

const Root = ({ store }) =>
  <Provider store={store}>
    <App/>
  </Provider>

export default Root