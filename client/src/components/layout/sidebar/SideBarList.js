import React, { useContext } from 'react'
import { BsPeople, BsBook, GoProject, 
    AiFillFileText, MdEmail, GoGraph, FaLanguage } from '../../icons/react-icons'
import { Select, MenuItem, makeStyles } from '../../material-ui/material-ui'
import {Link} from 'react-scroll'
import { Context } from '../../../lang/Wrapper'
import {FormattedMessage} from 'react-intl';

const useStyles = makeStyles({
    select: {
        marginTop: '170px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '32px',
        width: '65%'
    }
})

const SideBarList = ({ setExtended }) => {
    const classes = useStyles();
    const context = useContext(Context);
 
    const { selectLanguage } = context
    const handleClose = () => setExtended(false);
    return (
        <div>
            <ul className='sidebar__list-parent'>
         
             
                <Link  to="projects" spy={true} smooth={true} onClick={() => handleClose()}>
                    <li className='sidebar__list-parent-item sidebar__list-parent-item--2'>
                        <GoProject className='icon-list' style={{ fill: 'purple' }} />
                        <h5>

                        <FormattedMessage
                            id = "title1"
                            defaultMessage="Projects"
                        />
                        </h5>
                    </li>
                </Link>
                
             
                <Link to="skills" spy={true} smooth={true}>
                    <li className='sidebar__list-parent-item sidebar__list-parent-item--3'>
                        <GoGraph className='icon-list' style={{ fill: 'yellow' }} />
                        <h5>
                            <FormattedMessage
                                id = "title2"
                                defaultMessage="Skills"
                            />
                        </h5>
                    
                    </li>
                </Link>
                

                <Link  to="contact" spy={true} smooth={true}>
                    <li className='sidebar__list-parent-item sidebar__list-parent-item--5'>           
                    <MdEmail className='icon-list' style={{ fill: 'brown' }} />
                    <h5>
                        <FormattedMessage
                            id = "title3"
                            defaultMessage="Contact"
                        />
                    </h5>
                                
                    </li>
                </Link>
              
                <Link  to="about" spy={true} smooth={true}>
                    <li className='sidebar__list-parent-item sidebar__list-parent-item--1'>
                        <BsPeople style={{ fill: 'green' }} className='icon-list' />
                        <h5>
                            <FormattedMessage
                                id = "title4"
                                defaultMessage="About"
                            />
                        </h5>
                    
                    </li>
                </Link>
                <Select value={context.locale} 
                className={classes.select}
                IconComponent = {() => <FaLanguage size={30} />}
                onChange={(e) => selectLanguage(e)}>
                    <MenuItem value='pt-PT'>Português</MenuItem>
                    <MenuItem value='en'>English</MenuItem>
                </Select>
                
                
            </ul>
        </div>
    )
}

export default SideBarList
