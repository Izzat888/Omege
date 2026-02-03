import React from 'react'

import "./Article.css"
import { useTranslation } from 'react-i18next'
const Article = () => {
    const { t } = useTranslation();
    return (
        <div className='article'>
            <div className="container">
                <div className="article__container">
                    <h5 className='article__title'>{t("article.title")}</h5>
                    <p className='article__text'>{t("article.text")}</p>
                    <button className='article__btn'>{t("article.btn")}</button>
                </div>
            </div>
        </div>
    )
}

export default Article