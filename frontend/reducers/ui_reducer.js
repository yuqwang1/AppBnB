import { combineReducers } from 'redux'
import modal from './modal_reducer'
import filters from './filter_reducer'

export const uiReducer = combineReducers({
  modal,
  filters
})
