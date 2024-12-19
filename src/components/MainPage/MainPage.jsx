import { Link } from "react-router-dom"
import s from "./MainPage.module.css"

export const MainPage = () => {
    return (
        <>
        
        <section>
            <div className={s.mainImg}>
                <div className={s.container}>
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
        <section>
            <div>
                <div>
                    <h2>О курсе Roblox для детей</h2>
                    <p>Программа обучения сосредоточена на изучении языка LUA, а также на моделировании собственных локаций в популярном пространстве Roblox Studio. Мы учим ребят основам кодирования, — а они послужат отправной точкой в карьере будущего профессионального программиста. Программирование в Roblox для детей развивает творческое и пространственное мышление. Студент будет заниматься разработкой игр и развивать дизайнерское мышление.</p>

                </div>
                <div>
                    <span>ОСНОВНЫЕ ТЕМЫ</span>
                    <ul>
                        <li>Язык программирования LUA</li>
                        <li>3D моделирование</li>
                        <li>Анимация, визуальные и звуковые эффекты</li>
                        <li>Создание 3D игр</li>
                    </ul>
                    <img src="" alt="" />
                </div>
            </div>
        </section>
        </>
    )
}