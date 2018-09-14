import merge from 'lodash/merge';
import { UPDATE_FILTER }  from '../actions/filter_actions';

const filterReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_FILTER:
      const newFilter = { [action.filter]: action.value };
      return merge({}, state, newFilter);
    default:
      return state;
  }
};

export default filterReducer;
