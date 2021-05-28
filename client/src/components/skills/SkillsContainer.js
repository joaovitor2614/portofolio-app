import React from 'react'
import { react, css, js, redux, materialui, sass } from '../imgs/imgs'
import { Paper, Typography, makeStyles } from '../material-ui/material-ui'

const useStyles = makeStyles((theme) => ({
    techbox: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 180px)',
        gridTemplateRows: 'repeat(auto-fill, 200px)',
        gridGap: '25px',
        padding: '5px',
        paddingTop: '20px'
    },
    techboxitem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    paper: {
        margin: theme.spacing(1),
        marginLeft: '280px',
        maxWidth: '1000px',
        marginTop: theme.spacing(6),
        padding: theme.spacing(2),
        paddingTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    text: {
        borderBottom: '1px solid gray',
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}))

const SkillsContainer = (props) => {
    const classes = useStyles()
    const { category, tech } = props
    return (
        <Paper className={classes.paper} spacing={2}>
           <Typography variant="h4" component="h3"className={classes.text}>
               {category}
           </Typography>
           <Typography component="div" className={classes.techbox}>
               {tech.length > 0 && tech.map((t) => (
                   <Typography className={classes.techboxitem} key={t.title}>
                   <img style={{   height: '105px', width: '100px', marginBottom: '10px' }} 
                   src={t.img} alt="tech image" />
                   <Typography component="h5">
                       {t.title}
                   </Typography>
                    </Typography>
               ))}
                              
           </Typography>
        </Paper>
            
      
    )
}

export default SkillsContainer

