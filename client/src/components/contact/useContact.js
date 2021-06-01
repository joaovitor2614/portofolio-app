import { makeStyles } from '../material-ui/material-ui';
const useContact = makeStyles((theme) => ({
  
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
    },
    databox: {
        display: 'flex',
        flexDirection: 'row',
        margin: theme.spacing(3),
        "& div": {
            margin: theme.spacing(2)
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
            margin: '0 15px'
        }
    }
   
}))


export default useContact