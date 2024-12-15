import s from "./Root.module.css"

import { NavLink, Outlet } from "react-router-dom"

export const Root = () => {
    return (
        <>
        <nav className={s.containerNav}>
            <NavLink><img src="/images/robloxland.svg" alt="" /></NavLink>
            <div className={s.aDiv}>
                <NavLink className={s.aInfo}>О нас</NavLink>
                <NavLink className={s.aInfo}>Курсы</NavLink>
                <NavLink className={s.aInfo}>Попробовать</NavLink>
                <NavLink className={`${s.aInfo} ${s.divImg}`}>Платформа <img src="/images/Vector.svg" alt="" /></NavLink>
            </div>
        </nav>
        <Outlet />
        </>
    )
}