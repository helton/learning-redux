import { createStore, applyMiddleware, compose } from './lib/redux'
import { createLogger } from './lib/redux-logger'
import thunk from './lib/redux-thunk'
import todoApp from './reducers'

const configureStore = () => {
  let composeEnhancers = compose;

  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger({ 
      timestamp: true,
      duration: true,
      collapsed: (getState, action) => true,
    }))
    //composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  return createStore(
    todoApp,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}

export default configureStore
