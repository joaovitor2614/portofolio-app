import { Collapse, IconButton,  makeStyles, ClickAwayListener, MenuItem, Select } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import { AiOutlineMenu, FaLanguage } from '../../icons/react-icons'
import useResponsive from '../../hooks/useResponsive'
import SideBarList from './SideBarList'
import SideBarTop from './SideBarTop'
import { Context } from '../../../lang/Wrapper'
import { motion,  AnimatePresence } from 'framer-motion';

const useStyles = makeStyles({
    icon: {
       position: 'relative',
       top: 'calc(100% - 250px)'
       
    },

})

const SideBar = () => {
    const context = useContext(Context);
    const { selectLanguage } = context
    const classes = useStyles();
    let initialState = window.innerWidth < 900 ? false : true
    const [extended, setExtended] = useState(initialState)
    console.log('extended root', extended)
    const { isMobile } = useResponsive(setExtended);
    const handleExtend = () => setExtended(true);
    const handleAway = () => {
        if (isMobile === true) {
            setExtended(false)
        } else {
            return
        }
    }
  
    return (
        <div>
               
                    
               
                
                
                    <ClickAwayListener onClickAway={() => handleAway()}>

                        <div>
                            <div className='show-for-mobile'>
                                <IconButton onClick={() => handleExtend()} className={classes.icon}>
                                    <AiOutlineMenu size={40} style={{ marginRight: '140px'}} />
                                </IconButton>
                                <Select value={context.locale} 
                               
                                IconComponent = {() => <FaLanguage size={30} />}
                                onChange={(e) => selectLanguage(e)}>
                                    <MenuItem value='pt-PT'>Português</MenuItem>
                                    <MenuItem value='en'>English</MenuItem>
                                </Select>
                            </div>
                          
                            <AnimatePresence>
                                {extended === true && (
                                <motion.div className='sidebar' 
                                     key="bar"
                                    initial={{ x: "-100vh" }}
                                    exit={{ x: "-100vh" }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                
                                >    
                                    <SideBarTop />
                                    <SideBarList setExtended={setExtended} isMobile={isMobile} />
                                </motion.div>
                                )} 
                            </AnimatePresence>
                           
                        </div>
                        
                    </ClickAwayListener>
                       
                    
                    
        
            

        </div>
      
        
    )
}

export default SideBar
