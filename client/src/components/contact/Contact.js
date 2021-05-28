import React from 'react'
import ContactForm from './ContactForm'
import ContactMedia from './ContactMedia'

const Contact = () => {
    return (
        <section className='dashboard_contact'>
            <div className='dashboard_projects-text-box'>
                <h3>
                CONTACT
                </h3>
            </div>
            <ContactMedia />
            <ContactForm />
            
        </section>
    )
}

export default Contact
