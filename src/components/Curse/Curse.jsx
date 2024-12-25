import s from "./Curse.module.css";
import { CurseRoblox } from "./CurseRoblox/CurseRoblox";

const products = [
    {
        id: 1,
        age: "возраст 10-12",
        name: "Roblox Studio",
        text: "Погрузитесь в мир программирования с помощью Lua! На этом курсе вы научитесь писать скрипты для своих игр, создавая уникальные механики и взаимодействия.",
        roblox: "Roblox",
        prog: "Программирование",
        lua: "LUA",
        raz: "Разработка"
    },
    {
        id: 2,
        age: "возраст 9+",
        name: "Дизайн персонажей в Roblox",
        text: "Научитесь создавать уникальных персонажей для своих игр! Мы рассмотрим основы дизайна, создание аксессуаров и использование инструментов для кастомизации.",
        roblox: "Roblox",
        dis: "Дизайн"
    },
    {
        id: 3,
        age: "возраст 9+",
        name: "Создание игровых механик",
        text: "Этот курс предназначен для тех, кто хочет создать интересные игровые механики. Вы узнаете, как разрабатывать идеи, тестировать их и внедрять в свои плейсы.",
        roblox: "Roblox",
        prog: "Программирование",
        raz: "Разработка"
    },
    {
        id: 4,
        age: "возраст 10+",
        name: "Создание анимаций в Roblox",
        text: "Курсы по Roblox Studio с программированием на языке LUA. Для детей, которые никогда не создавали игры, но хотели бы научиться это делать",
        roblox: "Roblox",
        anim: "Анимация"
    },
    {
        id: 5,
        age: "возраст 13+",
        name: "Основы маркетинга для Roblox-игр",
        text: "Узнайте, как продвигать свои игры на платформе Roblox! Мы обсудим стратегии привлечения игроков, создание рекламы и взаимодействие с сообществом.",
        roblox: "Roblox",
        mark: "Маркетинг"
    },
    {
        id: 6,
        age: "возраст 12+",
        name: "Секреты успешного гейм-дизайна",
        text: "Погрузитесь в мир гейм-дизайна и узнайте, что делает игру успешной. Этот курс охватывает основные принципы дизайна уровней, взаимодействия с игроками и создание захватывающего контента.",
        roblox: "Roblox",
        game: "Гейм-дизайн"
    }
]

export const Curse = () => {
    return (
        <>
            <CurseRoblox />
            <div className={s.container}>
                {products.map(product => (
                    <div onClick={() => window.scrollTo({top:  document.body.scrollHeight, left: 0, behavior: "smooth"})} className={s.card} key={product.id}>
                        <div className={s.age}>
                            <span>
                                {product.age}
                            </span>
                            <img src="/images/image 48.png" alt="" />
                        </div>
                        <h3>{product.name}</h3>
                        <p>{product.text}</p>
                        <div className={s.flexSpan}>
                            {product.roblox && <span className={s.span}>{product.roblox}</span>}
                            {product.prog && <span className={s.span}>{product.prog}</span>}
                            {product.lua && <span className={s.span}>{product.lua}</span>}
                            {product.raz && <span className={s.span}>{product.raz}</span>}
                            {product.dis && <span className={s.span}>{product.dis}</span>}
                            {product.anim && <span className={s.span}>{product.anim}</span>}
                            {product.mark && <span className={s.span}>{product.mark}</span>}
                            {product.game && <span className={s.span}>{product.game}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};