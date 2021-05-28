import React from 'react'
import DashBoardProjectsCart from './DashBoardProjectsCart'
import { Grid, makeStyles, } from '../material-ui/material-ui'
import projectdata from './projectdata';
const useStyles = makeStyles({
    root: {
      marginLeft: '320px',
      marginTop: '100px',
      
      
    },
  });

const DashBoardProjects = () => {
    const classes = useStyles()
    return (
        <section className='dashboard_projects'>
            <div className='dashboard_projects-text-box'>
                <h3>PROJECTS</h3>
            </div>
           
            <Grid container spacing={6} className={classes.root}>
                {projectdata.length > 0 && projectdata.map((data) => (
                    <Grid item xs='auto' style={{display: 'flex'}} key={data.title}>
                        <DashBoardProjectsCart {...data}  />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}

export default DashBoardProjects
