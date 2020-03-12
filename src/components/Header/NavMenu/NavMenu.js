import React from 'react'
import classes from './NavMenu.module.css'

const NavMenu = (props) => {

    return (
        <div className={classes.navMenu}>
            <a href="#" className={classes.link}>Главная</a>
            <a href="#" className={classes.link}>Скилы</a>
            <a href="#" className={classes.link}>Проекты</a>
            <a href="#" className={classes.link}>Контакты</a>
        </div>
    )
}

export default NavMenu