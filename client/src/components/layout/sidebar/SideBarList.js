import React from 'react'
import { BsPeople, BsBook, GoProject, AiFillFileText, MdEmail, GoGraph } from '../../icons/react-icons'
const SideBarList = () => {
    return (
        <div>
            <ul className='sidebar__list-parent'>
                <li className='sidebar__list-parent-item sidebar__list-parent-item--1'>
                    <BsPeople size={30} style={{ fill: 'green' }} />
                    <h5>About</h5>
                   
                </li>
                <li className='sidebar__list-parent-item sidebar__list-parent-item--2'>
                    <GoProject size={30} style={{ fill: 'purple' }} />
                    <h5>Projects</h5>
                   
                </li>
                <li className='sidebar__list-parent-item sidebar__list-parent-item--3'>
                    <GoGraph size={30} style={{ fill: 'yellow' }} />
                    <h5>Skills</h5>
                   
                </li>
                <li className='sidebar__list-parent-item sidebar__list-parent-item--4'>
                    <BsBook size={30} style={{ fill: 'blue' }} />
                    <h5>Education</h5>
                   
                </li>
                <li className='sidebar__list-parent-item sidebar__list-parent-item--5'>
                    <MdEmail size={30} style={{ fill: 'brown' }} />
                    <h5>Contact</h5>
                   
                </li>
                <li className='sidebar__list-parent-item sidebar__list-parent-item--6'>
                    <AiFillFileText size={30} style={{ fill: 'black' }} />
                    <h5>Resume</h5>
                   
                </li>
                
            </ul>
        </div>
    )
}

export default SideBarList
