import * as useConstants from '../action.constant';

export const request = (user) => {
  console.log(user);
    return { type: useConstants.LOGIN_REQUEST, user };
  }
 export const success = (user) => {
  console.log(user);
    return { type: useConstants.LOGIN_SUCCESS, user };
  }
 export const failure = (user) => {
    return { type: useConstants.LOGIN_FAILURE, user };
  }