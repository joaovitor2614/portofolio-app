import { makeStyles } from '../material-ui/material-ui';
const useContact = makeStyles((theme) => ({
  
    paper: {
        margin: theme.spacing(1),
        marginLeft: '5px',
        maxWidth: '800px',
        marginTop: theme.spacing(4),
        padding: theme.spacing(1),
        marginBottom: theme.spacing(3),
        ['@media (min-width: 45rem)'] : {
            marginLeft: '280px',
            padding: theme.spacing(5),
        }
    },
    textbox: {
        
        maxWidth: '350px',
        whiteSpace: 'nowrap',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        ['@media (min-width: 45rem)'] : {
            maxWidth: '750px',
        }
    },
    form: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        margin: theme.spacing(1),
        ['@media (min-width: 45rem)'] : {
            padding: theme.spacing(2),
            margin: theme.spacing(2),
        }
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
    resetBtn: {
        display: 'block',
        marginLeft: '15px',
        ['@media (min-width: 45rem)'] : {
            marginLeft: '40px',
        }
    },
    title: {
        color: 'gray',
        fontSize: '2em',
        textShadow: ' 2px 2px 0 rgb(0 0 0 / 15%);',
        width: '50%',
        marginBottom: '.1em',
        fontWeight: 700,
        lineHeigh: '1.5em',
      
        ['@media (min-width: 45rem)'] : {
            fontSize: '2.6em',
            width: '100%',
        }
    },
    input: {
        width: '16rem',

        marginRight: theme.spacing(2),
        ['@media (min-width: 45rem)'] : {
            width: '28rem',
        }
    },
    databox: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(2),
        "& div": {
            margin: theme.spacing(1)
        },
        ['@media (min-width: 45rem)'] : {
            margin: theme.spacing(3),
            "& div": {
           
                margin: theme.spacing(2),

            },
            flexDirection: 'row',
        }
    },
    dataitem: {
        alignItems: 'center',
        borderRadius: '20px',
        lineHeight: '36px',
        height: '36px',
        background: 'rgb(89, 211, 89)',
        color: '#fff',
        display: 'flex',
        verticalAlign: 'middle',
        padding: '10px 15px',
        '& p': {
            margin: '0 7px'
        },
        ['@media (min-width: 45rem)'] : {
            '& p': {
                margin: '0 15px',
             
            },
        }
    }
   
}))


export default useContact