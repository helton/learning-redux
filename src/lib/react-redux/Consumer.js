import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Consumer extends Component {  
  static contextTypes = {
    store: PropTypes.object
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => 
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  get store() {
    return this.context.store
  }
  
  render() {
    return this.props.children
  }
}