import React from 'react'
import classes from './Projects.module.css'
import WorksItem from './WorksItem/WorksItem'

const Projects = (props) => {

    return (
        <div className={classes.projects}>
            <div className={classes.container}>
                <div className={classes.myWorks}>Мои работы</div>
                <div className={classes.myWorks__items}>
                    <WorksItem />
                    <WorksItem />
                </div>
            </div>
        </div>
    )
}

export default Projects