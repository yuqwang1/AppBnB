export const UPDATE_FILTER = 'UPDATE_FILTER'

export const changeFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  }
}
