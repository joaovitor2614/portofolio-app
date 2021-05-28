
import React, { useState } from 'react'
import { BsPencilSquare, BsPeopleCircle, AiOutlineMail} from 'react-icons/bs';
import { Paper, Typography, makeStyles, TextField, InputAdornment } from '../material-ui/material-ui';
import steps from './steps';

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
        maxWidth: '750px',
        whiteSpace: 'nowrap',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    form: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        margin: theme.spacing(2)
    },
    formBtn: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
    },
    textmain: {
        "& span": {
            fontWeight: 500
        }
    },
    title: {
        color: 'gray',
        fontSize: '2.6em',
        textShadow: ' 2px 2px 0 rgb(0 0 0 / 15%);',
        width: '100%',
        marginBottom: '.1em',
        fontWeight: 700,
        lineHeigh: '1.5em'
    },
    input: {
        width: '28rem',

        marginRight: theme.spacing(2)
    }
   
}))

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    let [currentStep, setCurrentStep] = useState(0);
    const handleNextStep = () => setCurrentStep(++currentStep);
    const { name, email, message } = formData;
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    }
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={2}>
            <Typography component="div" className={classes.textbox}>
                <Typography component="h1" className={classes.title}>
                    Get in touch 

                </Typography>
                <Typography component="h5">
                    If you wanna get in touch, talk to me about a project colaboration, 

                </Typography>
               
                <Typography component="h5">
                    hire me to build an app or just say hi,  fill the 
                    form bellow
                </Typography>
                <Typography component="h5" className={classes.textmain}>
                     or just send an email to  
                    <span> jvitoralvesestrella@gmail.com</span> and let's talk!
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    {steps[currentStep].id === 'NAME' && (
                        <TextField variant="outlined" name='name' placeholder="Fill with your name" 
                        className={classes.input} value={name} onChange={(e) => handleChange(e)}
                        InputProps={{
                        startAdornment: 
                        <InputAdornment position="start">
                            <BsPeopleCircle size={20} />
                        </InputAdornment>
                        }} />
                    )}
                    {steps[currentStep].id === 'EMAIL' && (
                        <TextField variant="outlined" name='email'
                        placeholder="Fill with your email address" 
                        className={classes.input} value={email} onChange={(e) => handleChange(e)}
                        
                        />
                     
                        
                    )}
                    {steps[currentStep].id === 'MSG' && (
                        <TextField variant="outlined" name='message'
                        placeholder="Fill with your message" 
                        className={classes.input}
                        value={message} onChange={(e) => handleChange(e)}
                        InputProps={{
                        startAdornment: 
                        <InputAdornment position="start">
                            <BsPencilSquare size={20} />
                        </InputAdornment>
                        }} />
                    )}
                   
                    <Typography component="div" className={classes.formBtn}>
                        <button disabled={name === ''} type='button' className="button" 
                        onClick={() => handleNextStep()}>
                            Next
                        </button>
                        <button type='submit' className="button">
                            Submit your message
                        </button>
                    </Typography>
                 
                </form>
               
             
            </Typography>
        </Paper>
    )
}

export default ContactForm
