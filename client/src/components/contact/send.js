import api from '../../utils/api'
import { Slide } from '../material-ui/material-ui';

const sendEmail = (data, enqueueSnackbar, lang) => async dispatch => {
    dispatch({
        type: 'LOADING'
    })
    await api.post('/sendemail', data);
    dispatch({
        type: 'LOADED'
    })
    if (lang === 'pt-PT' || 'pt' || 'pt-BR') {
        enqueueSnackbar('Mensagem enviado com sucesso', {
            autoHideDuration: 4000,
            variant: 'success',
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
        TransitionComponent: Slide,
    })
    } else if (lang === 'us' || 'en-US' || 'en') {
        enqueueSnackbar('Message sent successfully', {
            autoHideDuration: 4000,
            variant: 'success',
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
        TransitionComponent: Slide,
    })
    }
    
}

export default sendEmail