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
import axios from 'axios';

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
    const loadUser = () => console.log('loaduser');

    //Register User
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            });
        }
    }

    // Login User
    const login = () => console.log('login');

    // Logout
    const logout = () => console.log('logout');

    // Clear Erros
    const clearErrors = () => console.log('clearError');
    return (

        <AuthContext.Provider value={{
            token: state.token,
            user: state.user,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            register,
            loadUser, 
            login, 
            logout,
            clearErrors
           
        }}>
            {props.children}
        </AuthContext.Provider>
    )

 };

 export default AuthState;