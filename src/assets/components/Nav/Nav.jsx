import React from 'react'

import "./Nav.css"

import { useTranslation } from 'react-i18next'
import nimg from "./imges/photo10.jpg"
const Nav = () => {

    const { t } = useTranslation();
    return (
        <div className='nav'>
            <div className="container">
                <div className="nav__container">
                    <div className="nav__box">
                        <h2 className='nav__title'>{t("nav.title")}</h2>
                        <p className='nav__text'>{t("nav.text")}</p>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <p className='nav-one__text'>📱</p>
                                <p className='nav-two__text'>{t("nav.text1")}</p>
                            </li>
                            <li className='nav__item'>
                                <p className='nav-one__text'>📱</p>
                                <p className='nav-two__text'>{t("nav.text3")}</p>
                            </li>
                        </ul>
                    </div>
                    <img className='nav__img' src={nimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Nav