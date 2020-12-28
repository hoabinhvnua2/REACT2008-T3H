import * as useConstants  from "../action.constant";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
    user: user ?? {}
}
export function loginReduce(state = initialState, action) {
    console.log(action);
  switch (action.type) {
    case useConstants.LOGIN_REQUEST:
      return { loggingIn: true };
    case useConstants.LOGIN_SUCCESS:
      return {user: action.user};
    case useConstants.LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
}