import React from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

const Counter = props => {
  return (
    <div className="Counter">
      <span role="img" aria-label="Man Technology">👨🏾‍💻</span>
      <h1>{props.value}</h1>
      <button onClick={props.onDecrement}>-</button>
      <button onClick={props.onIncrement}>+</button>
    </div>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter