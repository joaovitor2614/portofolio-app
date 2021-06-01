import React from 'react'

import SkillsContainer from "./SkillsContainer"
import skillsdata from './skillsdata'

import {FormattedMessage} from 'react-intl';
const Skills = () => {
    return (
        <div id='skills'>
            <section className='dashboard_skills'>
                <div className='dashboard_projects-text-box'>
                    <h3>
                        <FormattedMessage
                            id = "title2"
                            defaultMessage="SKILLS"
                        />
                    </h3>
                </div>
                {skillsdata.length > 0 && skillsdata.map((skills) => (
                    <SkillsContainer {...skills} key={skills.category} />
                ))}
            
                
            </section>
        </div>
       
    )
}

export default Skills
