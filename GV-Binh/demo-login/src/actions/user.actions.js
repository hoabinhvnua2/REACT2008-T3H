import { useConstants } from "../constants/user.constant";
import { userService } from "../services/user.service";
import { history } from "../helper/history";

export const useActions = {
  register,
  login,
};

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (data) => {
        dispatch(success(data));
        history.push("/login");
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(usser) {
    return { type: useConstants.REGISTER_REQUEST, user };
  }
  function success(usser) {
    return { type: useConstants.REGISTER_SUCCESS, user };
  }
  function failure(usser) {
    return { type: useConstants.REGISTER_FAILURE, user };
  }
}

function login(user, from) {
  console.log(user);
  return (dispatch) => {
    dispatch(request(user.userName));

    userService.login(user).then(
      (data) => {
        dispatch(success(data));
        history.push(from);
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: useConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: useConstants.LOGIN_SUCCESS, user };
  }
  function failure(user) {
    return { type: useConstants.LOGIN_FAILURE, user };
  }
}
