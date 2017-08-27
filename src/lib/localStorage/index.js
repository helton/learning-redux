export const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState)
      return JSON.parse(serializedState)
    return undefined
  } catch (err) {
    return undefined
  }
}

export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (err) {
    // Ignore write terrors.
  }
}