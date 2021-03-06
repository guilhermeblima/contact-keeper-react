import React, { Fragment, useContext } from 'react';
import { motion } from "framer-motion";
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {contacts, filtered} = contactContext;

    if(contacts.length === 0){
        return <h4>Please add a contact</h4>;
    }

    return (
        <Fragment>
                {
                filtered !== null ? 
                    filtered.map(contact => (
                        <motion.div key={contact.id} layout initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}}>
                            <ContactItem contact={contact}/>
                        </motion.div>
                    )) 
                : 
                contacts.map(contact => (
                        <motion.div key={contact.id} layout initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}}>
                            <ContactItem contact={contact}/>
                        </motion.div>))
                }
        </Fragment>
    )
}

export default Contacts