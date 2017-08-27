import React, { Component } from 'react'
import TodoList from './TodoList'

class VisibleTodoList extends Component {
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

  componentDidMount() {
    const { store } = this.props
    this.unsubscribe = store.subscribe(() => 
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const { store } = props
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