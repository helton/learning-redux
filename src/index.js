import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import TodoApp from './components/TodoApp'
import { createStore } from 'redux'
import { todoApp } from './reducers/todo-reducers' 

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <TodoApp store={store}/>,
  document.getElementById('root')
)

registerServiceWorker()

//just to run some console tests
// require('./sandbox')