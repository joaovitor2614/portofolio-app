import { Collapse, IconButton,  makeStyles, ClickAwayListener } from '@material-ui/core'
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
    console.log('extended root', extended)
    useResponsive(setExtended);
    const handleExtend = () => setExtended(true);
  
    return (
        <div>
               
                    
               
                
                
                    <ClickAwayListener onClickAway={() => setExtended(false)}>
                        <div>
                            <IconButton onClick={() => handleExtend()} className={classes.icon}>
                                <AiOutlineMenu size={40} />
                            </IconButton>
                
                            <Collapse in={extended} timeout="2500" unmountOnExit className='sidebar'>
                            
                            <SideBarTop />
                            <SideBarList setExtended={setExtended} />

            
                            </Collapse>
                        </div>
                        
                    </ClickAwayListener>
                       
                    
                    
        
            

        </div>
      
        
    )
}

export default SideBar
