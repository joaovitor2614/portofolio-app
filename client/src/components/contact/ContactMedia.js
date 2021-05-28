
import React from 'react'
import { Grid, Typography, makeStyles } from '../material-ui/material-ui'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';


const useStyles = makeStyles({
    root: {
      marginLeft: '250px',
      marginTop: '25px',
      
      
    },
    item: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        textDecorationColor: 'none'
    }
  });

const ContactMedia = () => {
    const classes = useStyles()
    return (
        <Grid container spacing={0.4} className={classes.root}>

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
                    <Typography component="h5">João Vitor Alves Estrella</Typography>
                </a>
                
            </Grid>
            
            <Grid item  xs={3} >
                <a href="https://github.com/joaovitor2614"  style={{ textDecoration: 'none' }}
                    target="_blank" className={classes.item}
                >
                    <AiFillGithub size={40} style={{ marginBottom: '15px' }} />
                   <Typography component="h5">joaovitor2614</Typography>
                </a>
                
            </Grid>
           
        </Grid>
    )
}

export default ContactMedia
