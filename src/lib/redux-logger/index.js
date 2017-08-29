import moment from 'moment'

export const createLogger = (options = {}) => store => next => {
  if (!console.group) {
    return next
  }

  return action => {
    const previousState = store.getState()

    const startTime = performance.now()
    const returnValue = next(action)
    const endTime = performance.now()
    const elapsedTime = endTime - startTime

    let title = `${action.type}`
    if (options.timestamp)
      title += ` @ ${moment().format('HH:mm:ss.SSS')}`
    if (options.duration)
      title += ` (in ${elapsedTime.toFixed(2)} ms)`

    const applyStyle = customStyle => `${customStyle}; font-weight: bold`

    console.group(title)
    console.log('%cprev state', applyStyle('color: grey'), previousState)
    console.log('%caction', applyStyle('color: lightblue'), action)
    console.log('%cnext state', applyStyle('color: red'), store.getState())
    console.groupEnd(title)

    return returnValue
  }
}
