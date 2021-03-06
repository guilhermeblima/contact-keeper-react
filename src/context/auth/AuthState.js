import React, {useReducer} from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
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

 const AuthState = props => {
    const initialState ={
        token: localStorage.getItem('token'),
        isAuthenticated: null, 
        loading: true, 
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Load user

    //Register User

    // Login User

    // Logout


    // Clear Erros
    return (

        <AuthContext.Provider value={{
            token: state.token,
            user: state.user,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
           
        }}>
            {props.children}
        </AuthContext.Provider>
    )

 };

 export default AuthState;