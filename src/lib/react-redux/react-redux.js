import React from 'react'
import PropTypes from 'prop-types'

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

    render() {
      const stateToProps = mapStateToProps || (() => ({}))
      const dispatchToProps = mapDispatchToProps || (dispatch => ({ dispatch }))
      const props = { 
        ...stateToProps(this.store.getState(), this.props), 
        ...dispatchToProps(this.store.dispatch.bind(this.store), this.props)
      }
      return (
        <Component {...props}>
          {this.props.children}
        </Component>
      )
    }
  }

