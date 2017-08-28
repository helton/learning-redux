import React, { Component } from 'react'
import TodoList from './TodoList'
import { connect } from '../lib/react-redux'
import * as actions from '../actions'
import { withRouter } from 'react-router-dom'
import { getVisibleTodos } from '../reducers'
import { fetchTodos } from '../api'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData() 
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const { filter, receiveTodos } = this.props
    fetchTodos(filter).then(todos =>
      receiveTodos(filter, todos)
    )
  }

  render() {
    const { toggleTodo, ...rest } = this.props
    return (
      <TodoList 
        {...rest}
        onTodoClick={toggleTodo}
      />
    )
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  const filter = params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))