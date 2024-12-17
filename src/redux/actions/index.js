import { ADD_SUBJECT } from '../constans';

const addSubject = (payload) => {
  return {
    type: ADD_SUBJECT,
    payload,
  };
};

export { addSubject };
