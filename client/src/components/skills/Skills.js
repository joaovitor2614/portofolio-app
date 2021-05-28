import React from 'react'

import SkillsContainer from "./SkillsContainer"
import skillsdata from './skillsdata'

const Skills = () => {
    return (
        <section className='dashboard_skills'>
            <div className='dashboard_projects-text-box'>
                <h3>
                SKILLS
                </h3>
            </div>
            {skillsdata.length > 0 && skillsdata.map((skills) => (
                <SkillsContainer {...skills} key={skills.category} />
            ))}
          
            
        </section>
    )
}

export default Skills
