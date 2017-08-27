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

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    default:
      return todos
  }
}

const render = () => {
  const visibilityFilter = store.getState().visibilityFilter
  const filteredTodos = getVisibleTodos(store.getState().todos, visibilityFilter)

  ReactDOM.render(
    <TodoApp
      todos={filteredTodos}
      visibilityFilter={visibilityFilter}
      onAddClick={(id, text) => store.dispatch({
        type: 'ADD_TODO',
        id,
        text
      })}
      onTodoClick={id => store.dispatch({
        type: 'TOGGLE_TODO',
        id
      })}
      onFilterClick={filter => store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
      })}
      />,
    document.getElementById('root')
  )
}

store.subscribe(render)

render()
registerServiceWorker()

//just to run some console tests
// require('./sandbox')