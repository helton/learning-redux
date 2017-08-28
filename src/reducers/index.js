import { combineReducers } from '../lib/redux'
import todos, * as selectors from './todos'

const todoApp = combineReducers({ todos })

export default todoApp

export const getVisibleTodos = (state, filter) => selectors.getVisibleTodos(state.todos, filter)