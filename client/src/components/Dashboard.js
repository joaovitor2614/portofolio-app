import React from 'react'
import DashBoardProjects from './projects/DashBoardProjects'
import DashboardTop from './DashboardTop'
import Skills from './skills/Skills'
import Contact from './contact/Contact'
import About from './about/About'
const Dashboard = () => {
    return (
        <div>
            <DashboardTop />
            <DashBoardProjects />
            <Skills />
            <Contact />
            <About />
        </div>
    )
}

export default Dashboard
