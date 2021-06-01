import { Collapse, IconButton,  makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { AiOutlineMenu } from '../../icons/react-icons'
import useResponsive from '../../hooks/useResponsive'
import SideBarList from './SideBarList'
import SideBarTop from './SideBarTop'

const useStyles = makeStyles({
    icon: {
       position: 'relative',
       top: 'calc(100% - 250px)'
       
    },

})

const SideBar = () => {
    const classes = useStyles();
    let initialState = window.innerWidth < 900 ? false : true
    const [extended, setExtended] = useState(initialState)
 
    const handleExtend = () => setExtended(!extended);
    return (
        <div>
            <div className='show-for-mobile'>
                <IconButton onClick={() => handleExtend()} className={classes.icon}>
                    <AiOutlineMenu size={40} />
                </IconButton>
            </div>
            
            <Collapse in={extended} timeout="2500">
                <div className='sidebar'>
                    <SideBarTop />
                    <SideBarList />
                </div>
               
            </Collapse>
   
        </div>
        
    )
}

export default SideBar
