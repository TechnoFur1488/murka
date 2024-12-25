import { Link } from "react-router-dom"
import s from "./MainPage.module.css"
import { SectionS } from "./SectionS/SectionS"
import { SwiperS } from "./Swiper/SwiperS"
import { Why } from "./Why/Why"
import { RobloxLand } from "./RobloxLand/RobloxLand"
import { Program } from "./Program/Program"
import { Lesson } from "./Lesson/Lesson"

export const MainPage = () => {
    return (
        <>
            <section>
                <div className={s.mainImg}>
                    <div className={s.hero}>
                        <div className={s.imgText}>
                            <div className={s.flex}>
                                <span>Курсы Roblox <br /> для детей</span>
                                <img src="/images/image 48.png" alt="" />
                            </div>
                            <p><span className={s.textB}>Цели курса:</span>знакомство с Roblox Studio и программированием игр на языке Lua</p>
                            <p><span className={s.textB}>Описание курса:</span> Roblox — это платформа для создания игр. Игры кодируются в системе объектно-ориентированного программирования, использующей язык программирования Lua для управления игровой средой</p>
                            <div className={s.divSpan}>
                                <span>Roblox</span>
                                <span>LUA</span>
                                <span>Программирование</span>
                            </div>
                        </div>
                        <div className={s.line}></div>
                        <div className={s.flexBot}>
                            <div className={s.divSpanS} >
                                <span className={s.textSpan}><span className={s.textBS}>ВОЗРАСТ:</span>9 - 12</span>
                                <span className={s.textSpan}><span className={s.textBS}>ТРЕБОВАНИЯ:</span>Пользователь компьютера</span>
                                <span className={s.textSpan}><span className={s.textBS}>УРОВЕНЬ:</span>Базовый</span>
                                <span className={s.textSpan}><span className={s.textBS}>ПРОДОЛЖИТЕЛЬНОСТЬ:</span>32 урока</span>
                            </div>
                            <Link className={s.tryThis}>
                                <span>Попробуйте этот курс</span>
                                <img src="/images/image 3.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <SectionS />
            <SwiperS />
            <Why />
            <RobloxLand />
            <Program />
            <Lesson />
        </>
    )
}