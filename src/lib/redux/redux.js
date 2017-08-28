import mapValues from 'lodash/mapValues'
import Store from './Store'

export const createStore = (reducer, preloadedState, enhancer) => {
  if (typeof preloadedState === 'function') {
    enhancer = preloadedState
    preloadedState = undefined
  }
  const store = new Store(reducer, preloadedState)

  if (enhancer !== undefined)
    enhancer(store)

  return store
}

export const combineReducers = reducers =>
  (state = {}, action) => mapValues(reducers, (reducer, key) => reducer(state[key], action))

export const applyMiddleware = (...middlewares) => store => {
  middlewares.slice().reverse().forEach(middleware =>
    store.dispatch = middleware(store)(store.dispatch.bind(store))
  )
}
