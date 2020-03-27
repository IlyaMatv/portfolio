import React from 'react'
import classes from './WorksItem.module.css'

const WorksItem = (props) => {

    return (
        <div className={classes.worksItem}>
            <button>Смотреть</button>
            <div>
                <p>Название проекта</p>
                <span>Краткое описание</span>
            </div>
        </div>
    )
}

export default WorksItem