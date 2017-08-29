import Store from './Store'

const createStore = (reducer, preloadedState, enhancer) => {
  if (typeof preloadedState === 'function') {
    enhancer = preloadedState
    preloadedState = undefined
  }
  const store = new Store(reducer, preloadedState)

  if (enhancer !== undefined)
    enhancer(store)

  return store
}

export default createStore
