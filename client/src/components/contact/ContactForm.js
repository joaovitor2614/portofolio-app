
import React from 'react'
import { Paper, Typography, makeStyles } from '../material-ui/material-ui';

const useStyles = makeStyles((theme) => ({
  
    paper: {
        margin: theme.spacing(1),
        marginLeft: '280px',
        maxWidth: '800px',
        marginTop: theme.spacing(4),
        padding: theme.spacing(5),
        marginBottom: theme.spacing(3)
    },
    textbox: {
        maxWidth: '250px',
        whiteSpace: 'nowrap'

    }
   
}))

const ContactForm = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={2}>
            <Typography component="div" className={classes.textbox}>
                <Typography component="h5" className={classes.textbox}>
                    If you wanna get in touch, talk to me about a project colaboration, 
                    contract to build an app or just say hi,fill the 
                    
                    form bellow or just send an email to  
                    <span>jvitoralvesestrella@gmail.com</span> and let's talk!
                </Typography>
            </Typography>
        </Paper>
    )
}

export default ContactForm
