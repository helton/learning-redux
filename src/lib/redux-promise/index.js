const promise = store => 
  next => 
    async action => next(typeof action.then === 'function' ? await action : action)

export default promise
