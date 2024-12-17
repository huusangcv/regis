import subjectReducer from './subjectsReducer';

const rootReducer = (state = {}, action) => {
  return {
    suject: subjectReducer(state.suject, action),
  };
};

export default rootReducer;
