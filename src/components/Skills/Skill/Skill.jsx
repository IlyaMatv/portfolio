import React from 'react'
import classes from './Skill.module.css'

const Skill = (props) => {

    return (
        <div className={classes.skill}>
            <div className={classes.img}>
                
            </div>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div className={classes.discription}>
                description
            </div>
        </div>
    )
}

export default Skill