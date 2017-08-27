import { combineReducers } from '../lib/redux'
import todos from './todos'

const todoApp = combineReducers({ todos })

export {
  todos,
  todoApp
}