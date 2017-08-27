import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from './lib/redux'
import { Provider } from './lib/react-redux'
import { todoApp } from './reducers' 
import TodoApp from './components/TodoApp'

const persistedState = {
  todos: [{
    id: 0,
    text: 'Welcome back!',
    completed: false
  }],
  visibilityFilter: 'SHOW_ACTIVE'
}

const store = createStore(
  todoApp,
  persistedState/*,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //ReduxDevTools => just use it with the original Redux */
)

console.log(store.getState())

render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
