//DON'T USE IT YET!
//Some lifecycle methods are throwing <Cannot read property 'call' of null>

import React from 'react'

const withGroup = (title, fn) => {
  console.group(title)
  fn && fn()
  console.groupEnd(title)
}

export const lifecycleLogger = Component =>
  class extends Component {
    constructor(...args) {
      super(...args)
      withGroup('constructor', () => {
        console.log('args', Array.from(args))
      })
    }

    componentWillMount() {
      withGroup('componentWillMount')
    }

    componentDidMount() {
      withGroup('componentDidMount')
    }

    componentDidUpdate() {
      withGroup('componentDidUpdate')
    }

    componentWillUnmount() {
      withGroup('componentWillUnmount')
    }

    componentWillReceiveProps(nextProps) {
      withGroup('componentWillReceiveProps', () => {
        console.log('nextProps', nextProps)
      })
    }

    shouldComponentUpdate(nextProps, nextState) {
      withGroup('shouldComponentUpdate', () => {
        console.log('nextProps', nextProps)
        console.log('nextState', nextState)
      })
      return super.shouldComponentUpdate(nextProps, nextState)
    }

    componentWillUpdate(nextProps, nextState) {
      withGroup('componentWillUpdate', () => {
        console.log('nextProps', nextProps)
        console.log('nextState', nextState)
      })
      super.componentWillUpdate(nextProps, nextState)
    }

    forceUpdate() {
      withGroup('forceUpdate')
      super.forceUpdate()
    }

    setState(state) {
      withGroup('setState', () => {
        console.log('state', state)
      })
      super.setState(state)
    }

    render() {
      withGroup('render')
      return (
        <Component {...this.props}>
          {this.props.children}
        </Component>
      )
    }
  }
