import React from 'react'
import classes from './Footer.module.css'

const Footer = (props) => {

    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.footer__name}>Илья Матвейчук</div>
                <div className={classes.footer__items}>
                    <div className={classes.footer__item}></div>
                    <div className={classes.footer__item}></div>
                    <div className={classes.footer__item}></div>
                    <div className={classes.footer__item}></div>
                </div>
                <div className={classes.copyright}>© 2020 Все права защищены</div>
            </div>
        </div>
    )
}

export default Footer