import React, { useState } from 'react'
import { GoKebabVertical, AiOutlineClose, 
  BsBoxArrowUpRight, AiFillGithub } from './icons/react-icons'

import { Card, CardActionArea, CardContent, 
    Typography, CardActions, Grid, CardMedia, Button, 
    makeStyles, IconButton, Collapse, Fab, Tooltip } from './material-ui/material-ui'

    const useStyles = makeStyles((theme) => ({
      root: {
        paddingBottom: '20px',
        heigh: '140px'
      },
      box: {
         verticalAlign: 'middle',
         display: 'flex',
     
         justifyContent: 'space-between'
        
      },
      features: {

        padding: '20px 25px',
        marginBottom: 'auto'
      },
      featuresBar: {
        marginBottom: 'auto'
      },
      list: {
        display: 'flex',
    
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        marginTop: '20px',
        marginBottom: '20px',
        '& li': {
          margin: '10px 0'
        },
      },
        fab: {
          margin: theme.spacing(2)
        },
        tooltip: {
          borderTop: '1px solid gray',
          marginTop: 'auto'
        }
        
    
      }))

const DashBoardProjectsCart = (props) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles();
    const { img, title, description, features } = props
    const handleToggle = () => setOpen(!open)

    return (
        <Card  style={{display: 'flex', justifyContent: 'space-between',
        flexDirection: 'column', maxWidth: 345 }} className={classes.root}>
          <Collapse in={!open} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="190"
                image={img}
                title="Project image"
              />
              <CardContent>
                <Typography component='div' className={classes.box}>
                  <Typography  variant="h5" component="h3">
                    {title}
                  </Typography>
                  <IconButton onClick={() => handleToggle()}>
                      <GoKebabVertical />
                  </IconButton>
                </Typography>
              
                <Typography variant="body2" color="textPrimary" component="p">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Collapse>
          <Collapse in={open} className={classes.features}>
             <Typography  component='div' className={classes.box}>
                  <Typography  variant="h5" component="h3">
                    Features
                  </Typography>
                  <IconButton onClick={() => handleToggle()}>
                      <AiOutlineClose />
                  </IconButton>
             </Typography>
            <Typography component="div" className={classes.list}>
              {features.length > 0 && features.map((ft) => (
                <li>{ft}</li>
              ))}
                    
            </Typography>
            <Grid container spacing={1} justify='start' className={classes.tooltip}>

                <Grid item>
                  <Tooltip title='View Online' aria-label='View Online'>
                      <Fab color='primary' className={classes.fab}>
                          <BsBoxArrowUpRight />
                      </Fab>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Tooltip title='View Source' aria-label='View Source'>
                      <Fab color='primary' className={classes.fab}>
                          <AiFillGithub />
                      </Fab>
                  </Tooltip>
                </Grid>
            </Grid>
                  

          
          </Collapse>
          
          
        </Card>
      );
}

export default DashBoardProjectsCart
