import s from "./Swiper.module.css"

import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { EffectCards } from 'swiper/modules';

export const SwiperS = () => {
  return (
    <section className={s.container}>
      <h2>Примеры проектов курса Roblox</h2>
      <div className={s.flex}>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          className={s.mySwiper}
          modules={[EffectCards]}
          loop={true}
        >
          <SwiperSlide className={s.Swiper}>
            <div className={s.diwCard}>
              <div>
                <h4>РЕЗУЛЬТАТЫ КУРСЫ</h4>
                <span>1 / 4</span>
              </div>
              <p>Изучения языка программирования LUA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.Swiper}>
            <div className={s.diwCard}>
              <div>
                <h4>РЕЗУЛЬТАТЫ КУРСЫ</h4>
                <span>2 / 4</span>
              </div>
              <p>Изучения языка программирования LUA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.Swiper}>
            <div className={s.diwCard}>
              <div>
                <h4>РЕЗУЛЬТАТЫ КУРСЫ</h4>
                <span>3 / 4</span>
              </div>
              <p>Изучения языка программирования LUA</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.Swiper}>
            <div className={s.diwCard}>
              <div>
                <h4>РЕЗУЛЬТАТЫ КУРСЫ</h4>
                <span>4 / 4</span>
              </div>
              <p>Изучения языка программирования LUA</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <img className={s.img} src="/images/asd.gif" alt="я джифка" />
        <div className={s.divText}>
          <img src="/images/image 4.png" alt="" />
          <span>Егор Шип, 5 лет изучает Roblox</span>
        </div>
      </div>
    </section>
  )
};

