import React from 'react'
import classes from './WorksItem.module.css'

const WorksItem = (props) => {

    return (
        <div className={classes.works__item}>
            <div className={classes.works__img}>
                <button className={classes.works__btn}>Смотреть</button>
            </div>
            <div className={classes.works__footer}>
                <div className={classes.works__prj}>
                    <p>Название проекта</p>
                    <span>Краткое описание</span>
                </div>
            </div>
        </div>
    )
}

export default WorksItem