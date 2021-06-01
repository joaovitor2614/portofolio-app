import React from 'react'
import { Typography } from '../material-ui/material-ui'
import {FormattedMessage} from 'react-intl';
const ContactFormText = ({ classes }) => {
    return (
        <>
            <Typography component="h1" className={classes.title}>
                       <FormattedMessage
                            id = "contact.title"
                            defaultMessage="Get in touch"
                        />
                    </Typography>
                    <Typography component="h5">
                        <FormattedMessage
                            id = "contact.text1"
                            defaultMessage="If you wanna get in touch, talk to me about a project colaboration,"
                        />

                    </Typography>
                
                    <Typography component="h5">
                        <FormattedMessage
                            id = "contact.text2"
                            defaultMessage="hire me to build an app or just say hi,  fill the 
                            form bellow"
                        />
                        
                    </Typography>
                    <Typography component="h5" className={classes.textmain}>
                        <FormattedMessage
                            id = "contact.text3"
                            defaultMessage="or just send an email to"
                        />
                        <span> jvitoralvesestrella@gmail.com</span><FormattedMessage
                            id = "contact.text4"
                            defaultMessage="  and let's talk!"
                        />
            </Typography>
         </>
    )
}

export default ContactFormText
