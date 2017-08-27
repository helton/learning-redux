import Store from './Store'

export const createStore = (reducer, initialState) => new Store(reducer, initialState)

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
