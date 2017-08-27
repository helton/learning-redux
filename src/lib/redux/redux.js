import Store from './Store'

export const createStore = reducer => new Store(reducer)

export const combineReducers = reducers =>
  (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action)
        return nextState
      },
      {}
    )
  }
