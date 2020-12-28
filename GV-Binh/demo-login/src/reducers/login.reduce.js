import { useConstants } from "../constants/user.constant";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
    user: user ?? {}
}
export function loginReduce(state = initialState, action) {
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

// export function loginFaceReduce(state = initialState, action) {
//   switch (action.type) {
//     case useConstants.FB_LOGIN_REQUEST:
//       return { loggingIn: true };
//     case useConstants.FB_LOGIN_SUCCESS:
//       return {user: action.user};
//     case useConstants.FB_LOGIN_FAILURE:
//       return {};
//     default:
//       return state;
//   }
// }