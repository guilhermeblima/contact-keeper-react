import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL, 
    LOGIN_SUCCESS, 
    LOGOUT,
    CLEAR_ERRORS
} from '../types';

export default (state, action) => {
    switch(action.type){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true, 
                loading: false,
                user: action.payload
            }

        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state, 
                ...action.payload, 
                isAuthenticated: true, 
                loading: false,
                error: null            
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state, 
                token: null, 
                isAuthenticated: false, 
                loading: false, 
                user: null, 
                error: action.payload             
            }
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state, 
                token: null, 
                isAuthenticated: false, 
                loading: false, 
                user: null, 
                error: action.payload             
            }
        case CLEAR_ERRORS:
            return{
                ...state, 
                error: null
            }
        default:
            return state;
    }
}