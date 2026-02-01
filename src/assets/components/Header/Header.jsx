import React from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import "./Header.css"
import himg1 from "./images/photo2.png"
import himg2 from "./images/photo1.png"
import himg3 from "./images/photo3.png"

const Header = () => {
    const { t } = useTranslation();

    const boxes = [
        { img: himg1, title: t("header.title"), text: t("header.text") },
        { img: himg2, title: t("header2.title"), text: t("header2.text") },
        { img: himg3, title: t("header3.title"), text: t("header3.text") },
    ]

    return (
        <div className='header'>
            <div className="container">
                <Swiper className='swipper'
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                >
                    {boxes.map((box, index) => (
                        <SwiperSlide key={index}>
                            <div className='header-one__box'>
                                <div className="header__content">
                                    <h1 className='header__title'>{box.title}</h1>
                                    <p className='header__text'>{box.text}</p>
                                    <div className='btn'>
                                        <p className='price'>$299</p>
                                        <button className='header__btn'>{t("header.btn")}</button>
                                    </div>
                                </div>
                                <div className='images'>
                                    <img className='header-one__img' src={box.img} alt="Hero" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Header;
