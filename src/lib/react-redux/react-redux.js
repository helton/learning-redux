import React from 'react'
import PropTypes from 'prop-types'
import { mapValues } from 'lodash'

export const connect = (mapStateToProps, mapDispatchToProps) =>
  Component => class extends React.Component {
    static contextTypes = {
      store: PropTypes.object
    }

    static displayName() {
      return `Connect(${Component.displayName || Component.name})`
    }

    constructor() {
      super()
      this.shouldSubscribe = mapStateToProps !== null
    }

    componentDidMount() {
      if (this.shouldSubscribe)
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
      if (this.shouldSubscribe)
        this.unsubscribe()
    }

    get store() {
      return this.context.store
    }

    getStateToProps(mapStateToProps) {
      const stateToProps = mapStateToProps || (() => ({}))
      return stateToProps(this.store.getState(), this.props)
    }

    getDispatchToProps(mapDispatchToProps) {
      const dispatchToProps = mapDispatchToProps || (dispatch => ({ dispatch }))
      const dispatch = this.store.dispatch.bind(this.store)
      if (typeof dispatchToProps === 'function')
        return dispatchToProps(dispatch, this.props)
      else
        return mapValues(dispatchToProps, fn => (...args) => dispatch(fn(...args)))
    }

    render() {
      const props = { 
        ...this.getStateToProps(mapStateToProps), 
        ...this.getDispatchToProps(mapDispatchToProps)
      }
      return (
        <Component {...props}>
          {this.props.children}
        </Component>
      )
    }
  }

