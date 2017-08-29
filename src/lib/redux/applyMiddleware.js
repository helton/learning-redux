const applyMiddleware = (...middlewares) => store => {
  middlewares.slice().reverse().forEach(middleware =>
    store.dispatch = middleware(store)(store.dispatch.bind(store))
  )
}

export default applyMiddleware
