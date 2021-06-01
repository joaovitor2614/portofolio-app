import React from 'react'
import { Paper, makeStyles, Typography } from '../material-ui/material-ui'
import {FormattedMessage} from 'react-intl';
const useStyles = makeStyles((theme) => ({
  
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(1),
        marginLeft: '15px',
        width: '70%',

        lineHeight: '2.9rem',
        marginTop: theme.spacing(2),
        padding: theme.spacing(5),
        marginBottom: theme.spacing(3),
        ['@media (min-width: 45rem)'] : {
            marginLeft: '280px',
        }
    },
    title: {
        fontWeight: 400,
        fontSize: '1.1rem',
        margin: '20px 0',
       paddingLeft: '1.5rem',
       marginBottom: '30px',

        borderLeft: '3px solid rgb(89, 211, 89)',
        ['@media (min-width: 45rem)'] : {
            fontSize: '2rem',
            borderLeft: '5px solid rgb(89, 211, 89)',
        }
    },
    text: {
        letterSpacing: 1,
        marginBottom: '13px',
        fontSize: '0.9rem',
        ['@media (min-width: 45rem)'] : {
            fontSize: '1.6rem',
        }
    }
}))

const AboutText = () => {
    const classes = useStyles();
    return (
        <div className={classes.paper}>
                <Typography component="h3" className={classes.title}>
                  
                    <h3>
                        <FormattedMessage
                                id = "about.title"
                                defaultMessage="Obstinate full stack developer with a solid interest with technology"
                        />
                    </h3>
                </Typography>
 
                <div>
      
                    <Typography component="p" className={classes.text}>
                   
                        <FormattedMessage
                                id = "about.text1"
                                defaultMessage=" "
                        />
                    </Typography>
                    <Typography component="p" className={classes.text}>
                        <FormattedMessage
                                id = "about.text2"
                                defaultMessage="That's why as a web developer 
                                I'm always looking forward on using my stubbornness on problem solving to
                                attend customer needs in the best way possible and provide them with the 
                                best clean and 
                                scalable software."
                        />
                      
               
                    </Typography>
                  
                 
                </div>
          
            
        </div>
    )
}

export default AboutText
