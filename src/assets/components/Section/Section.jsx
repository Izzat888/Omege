import React from 'react'

import { useTranslation } from 'react-i18next'
import sec1 from "./images/photo5.svg";
import sec2 from "./images/photo6.png";
import "./Section.css"
function Section() {
    const {t} = useTranslation();
  return (
    <div className='section'>
        <div className="container">
            <div className="section__container">
                <h4 className='section__title'>{t("section.title")}</h4>
                <p className='section__text'>{t("section.text")}</p>
                <ul className='section__list'>
                    <li className='section__item'>
                        <img className='section__images1' src={sec1} alt="" />
                    </li>
                    <li className='section__item'>
                        <img className='section__images2' src={sec2} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Section