const { FILTER_MOVIES, FILTER_MOVIES_CATEGORY } = require('../constans');
// SEE508: {},
// SEE518: {},
// COS521: {},
// SHCN: {},
// CON915: {},
// CON915: {},
// CON511: {},
// MOR303: {},
const initialState = [];

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MOVIES_CATEGORY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
