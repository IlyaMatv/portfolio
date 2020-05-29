import React from 'react'
import classes from './Main.module.css'

const Main = (props) => {

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.greeting}>
                    <span>Привет</span>
                    <span>Меня зовут Илья Матвейчук</span>
                    <span>Я front-end разработчик</span>
                </div>
                <div className={classes.photo}>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main