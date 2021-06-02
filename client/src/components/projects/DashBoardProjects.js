import React from 'react'
import DashBoardProjectsCart from './DashBoardProjectsCart'
import { Grid, makeStyles, } from '../material-ui/material-ui'
import { useIntl } from 'react-intl';
import {FormattedMessage} from 'react-intl';
import { projectdata, projectdataPort } from './projectdata';
const useStyles = makeStyles({
    root: {
      marginLeft: '10px',
      marginTop: '50px',
      ['@media (min-width: 45rem)'] : {
        marginLeft: '320px',
        marginTop: '100px',
      }
      
      
    },
  });

const DashBoardProjects = () => {
    const intl = useIntl()
 
    const classes = useStyles()
    const Projects = () => {
       
        return (
            <>
                {intl.locale === 'pt-PT' || 'pt' || 'pt-BR' ? projectdataPort.map((data) => (
                        <Grid item xs='auto' style={{display: 'flex'}} key={data.title}>
                            <DashBoardProjectsCart {...data}  />
                        </Grid>
                    )) : projectdata.map((data) => (
                        <Grid item xs='auto' style={{display: 'flex'}} key={data.title}>
                            <DashBoardProjectsCart {...data}  />
                        </Grid>
                    ))
                    
                    }
            </>
        )
        
    }
    
    return (
        <div id='projects'>
            <section className='dashboard_projects'>
                <div className='dashboard_projects-text-box'>
                    <h3>
                        <FormattedMessage
                            id = "title1"
                            defaultMessage="PROJECTS"
                        />
                    </h3>
                </div>
            
                <Grid container spacing={6} className={classes.root}>
                    {intl.locale === 'pt-PT' || 'pt' || 'pt-BR' ? projectdataPort.map((data) => (
                       <Grid item xs='auto' style={{display: 'flex'}} key={data.title}>
                            <DashBoardProjectsCart {...data}  />
                        </Grid>
                    )) : (
                        <>
                            {projectdata.map((data) => (
                            <Grid item xs='auto' style={{display: 'flex'}} key={data.title}>
                                <DashBoardProjectsCart {...data}  />
                            </Grid>
                            ))}
                        </>
                    )
                     
                    }
                </Grid>
            </section>
        </div>
       
    )
}

export default DashBoardProjects
