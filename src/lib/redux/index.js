import Store from './Store'

const createStore = (reducer, enhancer) => new Store(reducer)

const combineReducers = reducers =>
  (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action)
        return nextState
      },
      {}
    )
  }

export { createStore, combineReducers }
// export * from 'redux'