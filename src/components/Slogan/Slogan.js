import React from 'react'
import classes from './Slogan.module.css'

const Slogan = (props) => {

    return (
        <div className={classes.slogan}>
            <div className={classes.container}>
                <div className={classes.slogan__items}>
                    <p>Рассматриваю варианты удаленной работы</p>
                    <button className={classes.slogan__btn}>Нанять меня</button>
                </div>
            </div>
        </div>
    )
}

export default Slogan