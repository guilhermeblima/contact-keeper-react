import React, {useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';
import ContactReducer from './contactReducer';
import ContactContext from './contactContext';
import {
    ADD_CONTACT, 
    DELETE_CONTACT, 
    SET_CURRENT, 
    CLEAR_CURRENT, 
    UPDATE_CONTACT, 
    FILTER_CONTACTS, 
    CLEAR_FILTER
} from '../types';

 const ContactState = props => {
    const initialState ={
        contacts: [
            {
                id: 1, 
                name: 'Jill Johnson', 
                email: 'jill@gmail.com', 
                phone: '111-111-1111', 
                type: 'personal'
            },
            {
                id: 2, 
                name: 'Harry Week', 
                email: 'harry@gmail.com', 
                phone: '098-234-231', 
                type: 'personal'
            },
            {
                id: 3, 
                name: 'Gal Johnson', 
                email: 'gal@gmail.com', 
                phone: '123-123-1221', 
                type: 'professional'
            },
        ], 
        current: null

    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //Add contact
    const addContact = contact => {
        contact.id = uuidv4;
        dispatch({type: ADD_CONTACT, payload: contact});
    }

    //Delete contact
    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id});
    }

    //Set current contact
    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact});
    }

    //clear current contact
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT, });
    }

    //update contact
    const updateContact = contact => {
        dispatch({type: UPDATE_CONTACT, payload: contact});
    }
    // filter contacts

    // clear filter

    return (

        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            addContact, 
            deleteContact, 
            updateContact,
            setCurrent, 
            clearCurrent,
        }}>
            {props.children}
        </ContactContext.Provider>
    )

 };

 export default ContactState;