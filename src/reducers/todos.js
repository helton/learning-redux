import { combineReducers } from '../lib/redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      const nextState = { ...state }
      action.response.forEach(todo => {
        nextState[todo.id] = todo
      })
      return nextState
    default:
      return state
  }
}

const mapByTodoIdReducer = (expectedFilter, state = [], action) => {
  if (action.filter !== expectedFilter)
    return state

  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map(todo => todo.id)
    default:
      return state
  }
}

const idsByFilter = combineReducers({
  all: mapByTodoIdReducer.bind(null, 'all'),
  active: mapByTodoIdReducer.bind(null, 'active'),
  completed: mapByTodoIdReducer.bind(null, 'completed'),
})

const todos = combineReducers({
  byId,
  idsByFilter
})

export default todos

export const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter]
  return ids.map(id => state.byId[id])
}
