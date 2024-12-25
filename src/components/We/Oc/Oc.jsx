import s from "./Oc.module.css";

export const Oc = () => {
    return (
        <div className={s.container}>
            <div className={s.topText}>
                <h2>Отзывы <span className={s.spanColor}>наших клиентов</span></h2>
                <span><span className={s.spanRoblox}>robloxland</span> <br /> <span className={s.spanColor}>4.5</span> Отзовик</span>
            </div>
            <div className={s.flex}>
                <div className={s.card}>
                    <img src="images/download 1.png" alt="" />
                    <h3>Сын успешно окончил базовый курс по Roblox Studio</h3>
                    <p>После окончания решили продолжить обучение дальше по курсу Roblox Studio. Отдельная благодарность преподавателю Булавенко Виталию, очень доходчиво и внимательно преподавал по пройденному курсу.</p>
                    <span>Владимир</span>
                </div>
                <div className={s.card}>
                    <img src="images/download 1.png" alt="" />
                    <h3>Легко и понятно</h3>
                    <p>Мой ребёнок прошёл курс по созданию плейсов. Получил огромное количество знаний. Преподаватель объяснял доступно. Общее впечатление — положительное. По возможности купим ещё один курс.</p>
                    <span>Константин</span>
                </div>
                <div className={s.card}>
                    <img src="images/download 1.png" alt="" />
                    <h3>Огромная благодарность</h3>
                    <p>Большое спасибо преподавателю моего сына — Евгению. Моему сыну 14 лет и каждую субботу он создавал свой плейс на языке LUA. Благодарю Евгения за щедрость, с которой он делится знаниями и своим временем</p>
                    <span>Наталья Усова</span>
                </div>
            </div>
            <span className={s.span}>Изучите 170+ отзывов о RobloxTeam на Отзовике</span>
        </div>
    );
};
