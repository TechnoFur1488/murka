import { Link } from "react-router-dom"
import s from "./MainPage.module.css"

export const MainPage = () => {
    return (
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
                    <div>
                        <div>
                            <span><span className={s.textB}>ВОЗРАСТ:</span>9 - 12</span>
                            <span><span className={s.textB}>ТРЕБОВАНИЯ:</span>Пользователь компьютера</span>
                            <span><span className={s.textB}>УРОВЕНЬ:</span>Базовый</span>
                            <span><span className={s.textB}>ПРОДОЛЖИТЕЛЬНОСТЬ:</span>32 урока</span>
                        </div>
                        <Link>Попробуйте этот курс</Link>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}