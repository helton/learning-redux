export default class Store {
  constructor(reducer) {
    this.reducer = reducer
    this.observers = []
    this.dispatch({})
  }

  getState() {
    return this.state
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action)
    this.observers.forEach(observer => observer())
  }

  subscribe(observer) {
    this.observers.push(observer)
    return () => {
      this.observers = this.observers.filter(current =>
        current !== observer
      )
    }
  }
}
