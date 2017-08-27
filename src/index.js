import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from './lib/redux'
import { Provider } from './lib/react-redux'
import { todoApp } from './reducers/reducers' 
import TodoApp from './components/TodoApp'

const store = createStore(
  todoApp/*,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //ReduxDevTools => just use it with the original Redux */
)

render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
