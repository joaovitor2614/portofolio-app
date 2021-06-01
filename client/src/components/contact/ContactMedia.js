
import React from 'react'
import { Grid, Typography, makeStyles } from '../material-ui/material-ui'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';


const useStyles = makeStyles({
    root: {
        alignItems: 'center',
      marginLeft: '2s0px',
      marginTop: '25px',
      display: 'flex',
      flexDirection: 'column',
      ['@media (min-width: 45rem)'] : {
        marginLeft: '250px',
        flexDirection: 'row',
        alignItems: 'start'
      }
      
      
    },
    item: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        color: 'black',
        flexDirection: 'column',
        textDecoration: 'none',
        textDecorationColor: 'none',
        margin: '9px 0',
      
        ['@media (min-width: 45rem)'] : {
            margin: 0
        }
    },
    name: {
        display: 'inline-block'
    }
  });

const ContactMedia = () => {
    const classes = useStyles()
    return (
        <Grid container spacing={1} className={classes.root}>

            <Grid item xs={3} className={classes.item}>
                <AiOutlineMail size={40} style={{ marginBottom: '15px' }} />
                <Typography component="h5">jvitoralvesestrella@gmail.com</Typography>
            </Grid>
            <Grid item className={classes.item} xs={3} >
                
                <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-alves-estrella-b3a74815a/"  
                style={{ textDecoration: 'none' }}
                    target="_blank" className={classes.item}
                >
                    <AiFillLinkedin size={40} style={{ marginBottom: '15px' }} />
                    <Typography component="h5" className={classes.name}>
                        João Vitor Alves Estrella
                    </Typography>
                </a>
                
            </Grid>
            
            <Grid item  xs={3} >
                <a href="https://github.com/joaovitor2614"  style={{ textDecoration: 'none' }}
                    target="_blank" className={classes.item}
                >
                    <AiFillGithub size={40} style={{ marginBottom: '15px' }} />
                   <Typography component="h5" className={classes.name}>
                       joaovitor2614
                    </Typography>
                </a>
                
            </Grid>
           
        </Grid>
    )
}

export default ContactMedia
