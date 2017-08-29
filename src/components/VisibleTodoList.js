import React, { Component } from 'react'
import TodoList from './TodoList'
import { connect } from '../lib/react-redux'
import * as actions from '../actions'
import { withRouter } from 'react-router-dom'
import { getVisibleTodos, getIsFetching } from '../reducers'

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
    const { filter, fetchTodos } = this.props
    fetchTodos(filter).then(() => console.info('Data received from the server'))
  }

  render() {
    const { todos, isFetching } = this.props
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }

    return (
      <TodoList 
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  const filter = params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  }
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))
