import { useEffect, useState } from "react";
import s from "./Root.module.css";

import { useSelector } from 'react-redux'

import { NavLink, Outlet } from "react-router-dom";

import { IMaskInput } from 'react-imask';

export const Root = () => {
    const [check, setCheck] = useState(false);

    const handleClickCheck = () => {
        if (check === false) {
            alert("Потвердите обработку");
        } else {
            alert("Вы записались!");
        }
    };
    
    return (
        <>
            <section className={s.sec}>
                <header className={s.container}>
                    <nav className={s.containerNav}>
                        <NavLink><img src="/images/robloxland.svg" alt="" /></NavLink>
                        <div className={s.aDiv}>
                            <NavLink to={"We"} className={s.aInfo}>О нас</NavLink>
                            <NavLink to={"Curse"} className={s.aInfo}>Курсы</NavLink>
                            <button onClick={() => window.scrollTo({top:  document.body.scrollHeight, left: 0, behavior: "smooth"})} className={`${s.aInfo} ${s.Try}`}>Попробовать</button>
                            <NavLink to={"Reg"} className={`${s.aInfo} ${s.divImg}`}>Войти  <img src="/images/Vector.svg" alt="" /></NavLink>
                        </div>
                    </nav>
                </header>
            </section>
            <Outlet />
            <section className={s.sectionContainer}>
                <div className={s.regChil}>
                    <div className={s.textImg}>
                        <span className={s.footerSpan}>ваш ребёнок</span>
                        <span className={s.footerSpan}>сможет</span>
                        <span className={`${s.footerSpan} ${s.color}`}>так же</span>
                        <div>
                            <div className={s.imgAlex}>
                                <img src="/images/image 22.png" alt="" />
                                <img src="/images/image 23.png" alt="" />
                            </div>
                            <span className={s.work}>Работа Алекса, 10 лет</span>
                        </div>
                    </div>
                    <div className={s.input}>
                        <p>Запишитесь на бесплатное пробное занятие в онлайн-школу программирования для детей и подростков прямо сейчас! Ждём вас в сообществе креативных детей и заботливых родителей!</p>
                        <input className={s.inputText} placeholder="Ваше имя" type="text" />
                        <input className={s.inputText} placeholder="Имя ребёнка" type="text" />
                        <input className={s.inputText} placeholder="Возраст ребёнка" type="text" />
                        <input className={s.inputText} placeholder="Email" type="email" />
                        <IMaskInput mask={"+{7} (000) 000 00 00 "} className={s.inputText} placeholder="Номер телефона" type="tel" />
                        <div className={s.checkboxContainer}>
                            <div className={s.checkboxWrapper}>
                                <input
                                    className={s.hiddenCheckbox}
                                    checked={check}
                                    onChange={() => setCheck(!check)}
                                    type="checkbox"
                                    id="customCheckbox"
                                />
                                <label className={s.customCheckbox} htmlFor="customCheckbox"></label>
                            </div>
                            <span className={s.i}>
                                Я согласен на обработку моих данных и ознакомлен с Политикой конфиденциальности
                            </span>
                        </div>
                        <button onClick={() => handleClickCheck()} className={s.btn}>Записаться</button>
                    </div>
                </div>
            </section>
            <footer className={s.container}>
                <div>
                    <div className={s.divTetxLogo}>
                        <img src="/images/Group 41.svg" alt="" />
                        <h4>ROBLOXLAND PTE. LTD.68 <br /> CIRCULAR ROAD 02-01 <br /> SINGAPORE (049422)</h4>
                        <div className={s.NavLinkFoot}>
                            <NavLink to={"We"}>О нас</NavLink>
                            <NavLink to={"Curse"}>Курсы</NavLink>
                        </div>
                    </div>
                    <div className={s.line}></div>
                    <div>
                        <span>© robloxland, 2024</span>
                    </div>
                </div>
            </footer>
        </>
    );
};
