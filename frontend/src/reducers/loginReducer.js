import * as types from '../actions';

export default function loginReducer(state = [], action) {
  const response = action.response;
  console.log(action.type)

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      console.log("yes")
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};