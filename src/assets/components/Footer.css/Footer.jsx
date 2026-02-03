import React from 'react'

import { useTranslation } from 'react-i18next'
import "./Footer.css"
const Footer = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className='footer'>
                <div className="container">
                    <div className="footer__container">
                        <div className='footer-one__box'>
                            <h6 className='footer__title'>{t("footer.title")}</h6>
                            <button className='footer__btn'>{t("footer.btn")}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='footer__box'>
                    <h6 className='footer__logo'>{t("box.title")}</h6>
                    <ul className='footer__list'>
                        <li className='footer__item'><a className='footer__link' href="#">{t("box.link1")}</a></li>
                        <li className='footer__item'><a className='footer__link' href="#">{t("box.link2")}</a></li>
                        <li className='footer__item'><a className='footer__link' href="#">{t("box.link3")}</a></li>
                    </ul>
                    <p className='footer__text'>{t("box.text")}</p>
                </div>
            </div>
        </>
    )
}

export default Footer