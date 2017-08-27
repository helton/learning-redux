import TodoList from './TodoList'
import { connect } from '../lib/react-redux'
import { toggleTodo } from '../actions'
import { withRouter } from 'react-router-dom'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos
    case 'active':
      return todos.filter(t => !t.completed)
    case 'completed':
      return todos.filter(t => t.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state, { match: { params } }) => ({
  todos: getVisibleTodos(
    state.todos,
    params.filter || 'all'
  )
})

// const mapDispatchToProps = dispatch => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id))
//   }
// })

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList))

export default VisibleTodoList