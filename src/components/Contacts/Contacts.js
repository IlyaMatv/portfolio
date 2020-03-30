import React from 'react'
import classes from './Contacts.module.css'

const Contacts = (props) => {

    return (
        <div className={classes.contacts}>
            <div className={classes.container}>
                <div className={classes.contacts__text}>Контакты</div>
                <form action="" className={classes.contacts__form}>
                    <input type="text" />
                    <input type="text" />
                    <textarea></textarea>
                </form>
                <button className={classes.contacts__btn}>Отправить</button>
            </div>
        </div>
    )
}

export default Contacts