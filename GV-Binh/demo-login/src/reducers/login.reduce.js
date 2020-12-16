import {useConstants} from '../constants/user.constant';
export function loginReduce(state= {}, action) {
    switch (action.type) {
        case useConstants.LOGIN_REQUEST:
            return {loggingIn: true};
        case useConstants.LOGIN_SUCCESS:
            return {};
        case useConstants.LOGIN_FAILURE:
            return {};
    
        default:
            return state;
    }
}