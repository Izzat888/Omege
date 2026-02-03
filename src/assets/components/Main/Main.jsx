import React from 'react'

import { FaPalette,  FaDesktop, FaMobileAlt, FaRocket, FaHeadphonesAlt, FaHeadset, FaSyncAlt, FaRegFileAlt} from "react-icons/fa";
import { useTranslation } from 'react-i18next'
import "./Main.css"
const Main = () => {
    const {t} = useTranslation();
  return (
    <div className='main'>
        <div className="container">
            <div className='main__container'>
                <h3 className='main__title'>{t("main.title")}</h3>
                <ul className='main__list'>
                    <li className='main__item1'><p className='main-list__text'><FaPalette className='icon' size={32}/>{t("main.text1")}</p></li>
                    <li className='main__item'><p className='main-list__text'>< FaDesktop className='icon' size={32}/>{t("main.text2")}</p></li>
                    <li className='main__item'><p className='main-list__text'><FaMobileAlt className='icon' size={32}/>{t("main.text3")}</p></li>
                    <li className='main__item'><p className='main-list__text'><FaRocket className='icon' size={32}/>{t("main.text4")}</p></li>
                    <li className='main__item4'><p className='main-list__text'><FaHeadphonesAlt className='icon' size={32}/>{t("main.text5")}</p></li>
                    <li className='main__item'><p className='main-list__text'><FaHeadset className='icon' size={32}/>{t("main.text6")}</p></li>
                    <li className='main__item5'><p className='main-list__text'><FaSyncAlt className='icon' size={32}/>{t("main.text7")}</p></li>
                    <li className='main__item'><p className='main-list__text'><FaRegFileAlt className='icon' size={32}/>{t("main.text8")}</p></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Main