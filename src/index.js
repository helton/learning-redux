import React from 'react';
import { render } from 'react-dom';
import throttle from 'lodash/throttle'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from './lib/redux'
import { Provider } from './lib/react-redux'
import { loadState, saveState } from './lib/localStorage'
import { todoApp } from './reducers' 
import TodoApp from './components/TodoApp'

const persistedState = loadState()

const store = createStore(
  todoApp,
  persistedState/*,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //ReduxDevTools => just use it with the original Redux */
)

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  })
}, 1000))

render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
