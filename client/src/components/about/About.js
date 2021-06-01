import React from 'react'
import AboutText from './AboutText'
import {FormattedMessage} from 'react-intl';
const About = () => {
    return (
        <div id='about'>
            <section className='dashboard_contact'>
                <div className='dashboard_projects-text-box'>
                    <h3>
                        <FormattedMessage
                                id ="title4"
                                defaultMessage="About"
                        />
                    </h3>
                </div>
                <AboutText />
                
              
                
            </section>
        </div>
    )
}

export default About
