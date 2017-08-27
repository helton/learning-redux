import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import { createStore } from 'redux'
import { createStore } from './lib/redux'
import { Provider } from './lib/react-redux'
import { todoApp } from './reducers/todo-reducers' 
import TodoApp from './components/TodoApp'

const store = createStore(
  todoApp/*,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
)

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

//just to run some console tests
// require('./sandbox')