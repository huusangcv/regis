const { ADD_SUBJECT } = require('../constans');
const initialState = [{}];

const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBJECT:
      const result = initialState.find((item) => {
        return item.code === action.payload.code;
      });

      console.log('check>>>> ', result);
      return [...state, action.payload];

    default:
      return state;
  }
};

export default subjectReducer;
