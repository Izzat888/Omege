import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Hero.css"

const Hero = () => {
  const { t, i18n } = useTranslation()

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className='hero'>
      <div className="container">
        <div className="hero__container">
          <h1 className='logo'>OMEGA</h1>

          <ul className='hero__list'>
            <li><a className='hero__link' href="#">{t("hero.demos")}</a></li>
            <li><a className='hero__link' href="#">{t("hero.pages")}</a></li>
            <li><a className='hero__link' href="#">{t("hero.support")}</a></li>
          </ul>

          {/* Select with flag emojis */}
          <select
            className="lang-select"
            value={i18n.language}
            onChange={handleChange}
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uz">O‘zbek</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Hero
