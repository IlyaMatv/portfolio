import React from 'react'
import classes from './Skills.module.css'
import Skill from './Skill/Skill'

const Skills = (props) => {

    return (
        <div className={classes.skills}>
            <div className={classes.container}>
                <div className={classes.mySkills}>Мои скилы</div>
                <div className={classes.skillsDescription}>
                    <Skill title="React"/>
                    <Skill title="Redux"/>
                    <Skill title="Native JS"/>
                </div>
            </div>
        </div>
    )
}

export default Skills