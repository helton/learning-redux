import React from 'react'
import TodoList from './TodoList'
import { Consumer } from '../lib/react-redux'

class VisibleTodoList extends Consumer {
  getVisibleTodos(todos, filter) {
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

  render() {
    const store = this.store
    const state = store.getState()

    return (
      <TodoList
        todos={
          this.getVisibleTodos(
            state.todos,
            state.visibilityFilter  
          )
        }
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id  
          })
        }
        />
    )
  }
}

export default VisibleTodoList