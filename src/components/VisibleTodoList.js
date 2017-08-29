import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoList from './TodoList'
import FetchError from './FetchError'
import { connect } from '../lib/react-redux'
import * as actions from '../actions'
import { withRouter } from 'react-router-dom'
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'

class VisibleTodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetchTodos: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData = () => {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter).then(() => console.info('Data received from the server'))
  };

  render() {
    const { todos, errorMessage, isFetching } = this.props
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError 
          message={errorMessage}
          onRetry={this.fetchData}
        />
      )
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
    errorMessage: getErrorMessage(state, filter),
    filter
  }
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))
