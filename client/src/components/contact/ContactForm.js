
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack';
import { BsPencilSquare, BsPeopleCircle,  } from 'react-icons/bs';
import { Paper, Typography, TextField, InputAdornment, 
    CircularProgress } from '../material-ui/material-ui';
import ContactFormData from './ContactFormData';
import ContactFormText from './ContactFormText';
import sendEmail from './send';
import steps, { isDisabled, handleReset, handleNextStep } from './steps';
import useContact from './useContact';
import {FormattedMessage} from 'react-intl';
import { useIntl } from 'react-intl';

const ContactForm = ({ loading }) => {
    const intl = useIntl()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [displayData, setDisplayData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    let [currentStep, setCurrentStep] = useState(0);
    const { name, email, message } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendEmail(formData, enqueueSnackbar, intl.locale))
        
 
        handleReset(setFormData, formData, setCurrentStep)
    }
   
    const classes = useContact();
    return (
        <Paper className={classes.paper} elevation={2}>
            <Typography component="div" className={classes.textbox}>
                <ContactFormText classes={classes} />
                <ContactFormData classes={classes} formData={displayData} />
                <form className={classes.form} onSubmit={handleSubmit}>
                    {steps[currentStep].id === 'NAME' && (
                        <TextField variant="outlined" name='name' placeholder="Fill with your name"
                        autoComplete="off" 
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
                        placeholder={
                            <FormattedMessage
                            id = "input2"
                            defaultMessage="Fill up with your email address"
                           />
                        } 
                        className={classes.input} value={email} onChange={(e) => handleChange(e)}
                        
                        />
                     
                        
                    )}
                    {steps[currentStep].id === 'MSG' && (
                        <TextField variant="outlined" name='message'
                        placeholder="Fill with your message"
                        autoComplete="off"
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
                    {steps[currentStep].id === 'NAME' && (
                        <button disabled={isDisabled(currentStep, formData)} 
                        type='button' className="button" 
                        onClick={() => 
                        handleNextStep(setCurrentStep, currentStep, 
                        setDisplayData, 'name', name, displayData)}>
                            <FormattedMessage
                            id = "btn.next"
                            defaultMessage="Next"
                           />
                        </button>
                       )}
                         {steps[currentStep].id === 'EMAIL' && (
                        <button disabled={isDisabled(currentStep, formData)} 
                        type='button' className="button" 
                        onClick={() => 
                        handleNextStep(setCurrentStep, currentStep, 
                        setDisplayData, 'email', email, displayData)}>
                             <FormattedMessage
                                id = "btn.next"
                                defaultMessage="Next"
                            />
                        </button>
                         )}
                        <button type='submit' className="button" 
                        disabled={name === '' || email === '' || message === ''}>
                              <FormattedMessage
                                id = "btn.submit"
                                defaultMessage="Submit your message"
                              />
                        </button>
                        <button type='button' style={{ marginLeft: '40px'}} className="button" 
                        onClick={() => handleReset(setFormData, formData, setCurrentStep, setDisplayData)}>
                             <FormattedMessage
                                id = "btn.reset"
                                defaultMessage="Reset"
                            />
                        </button>
                        {loading && (
                            <CircularProgress />
                        )}
                    </Typography>
                 
                </form>
               
             
            </Typography>
        </Paper>
    )
}

export default ContactForm
