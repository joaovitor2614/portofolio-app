import React from 'react'
import { useSelector } from 'react-redux'
import ContactForm from './ContactForm'
import ContactMedia from './ContactMedia'

import {FormattedMessage} from 'react-intl';
const Contact = () => {
    const defaultState = useSelector(state => state.default)
    return (
        <div id='contact'>
            <section className='dashboard_contact'>
                <div className='dashboard_projects-text-box'>
                    <h3>
                        <FormattedMessage
                            id = "title3"
                            defaultMessage="CONTACT"
                        />
                    </h3>
                </div>
                <ContactMedia />
                <ContactForm loading={defaultState.loading} />
                
            </section>
        </div>
        
    )
}

export default Contact
