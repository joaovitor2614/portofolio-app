import React from 'react'
import SideBarList from './SideBarList'
import SideBarTop from './SideBarTop'

const SideBar = () => {
    return (
        <div className='sidebar'>
            <SideBarTop />
            <SideBarList />
        </div>
    )
}

export default SideBar
