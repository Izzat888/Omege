import React from 'react'
import "./Aside.css"
import { useTranslation } from 'react-i18next'
import asimg1 from "./images/photo7.png"
import asimg2 from "./images/photo8.png"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const Aside = () => {
  const { t } = useTranslation();

  return (
    <div className='aside'>
      <div className="container">
        <div className="aside__container">
          <h5 className='aside__title'>{t("aside.title")}</h5>
          <p className='aside__text'>{t("aside.text")}</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop={true}
          className='aside__list'
        >

          <SwiperSlide className='swiperrr'>
            <li className='aside__item'>
            <p className='list__text'>{t("aside.text1")}</p>
            <div className='list__box'>
              <img className='list__img' src={asimg1} alt="" />
              <div className='item__box'>
                <h6 className='list__title'>Michael Lee</h6>
                <p className='item__text'>CEO at Creativex</p>
              </div>
            </div></li>
          </SwiperSlide>

          <SwiperSlide className='swiperrr'>
            <li className='aside__item'>
            <p className='list__text'>{t("aside.text2")}</p>
            <div className='list__box'>
              <img className='list__img' src={asimg2} alt="" />
              <div className='item__box'>
                <h6 className='list__title'>Michael Lee</h6>
                <p className='item__text'>CEO at Creativex</p>
              </div>
            </div></li>
          </SwiperSlide>

          <SwiperSlide className='swiperrr'>
            <li className='aside__item'>
            <p className='list__text'>{t("aside.text3")}</p>
            <div className='list__box'>
              <img className='list__img' src={asimg1} alt="" />
              <div className='item__box'>
                <h6 className='list__title'>Michael Lee</h6>
                <p className='item__text'>CEO at Creativex</p>
              </div>
            </div></li>
          </SwiperSlide>

          <SwiperSlide className='swiperrr'>
            <li className='aside__item'>
            <p className='list__text'>{t("aside.text2")}</p>
            <div className='list__box'>
              <img className='list__img' src={asimg2} alt="" />
              <div className='item__box'>
                <h6 className='list__title'>Michael Lee</h6>
                <p className='item__text'>CEO at Creativex</p>
              </div>
            </div></li>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  )
}

export default Aside
