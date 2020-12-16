import {useConstants} from '../constants/user.constant';

export function registerReduce(state = {}, action) {
    switch (action.type) {
        case useConstants.REGISTER_REQUEST:
            return {registering: true};
        case useConstants.REGISTER_SUCCESS:
            return {};
        case useConstants.REGISTER_FAILURE:
            return {};
    
        default:
            return state;
    }
}