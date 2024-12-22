import s from "./SectionS.module.css";

export const SectionS = () => {
    return (
        <section className={s.container}>
            <div className={s.containerFlex}>
                <div className={s.divText}>
                    <h2>О курсе Roblox для детей</h2>
                    <p>Программа обучения сосредоточена на изучении языка LUA, а также на моделировании собственных локаций в популярном пространстве Roblox Studio. Мы учим ребят основам кодирования, — а они послужат отправной точкой в карьере будущего профессионального программиста. Программирование в Roblox для детей развивает творческое и пространственное мышление. Студент будет заниматься разработкой игр и развивать дизайнерское мышление.</p>
                </div>
                <div className={s.imgList}>
                    <span>ОСНОВНЫЕ ТЕМЫ</span>
                    <ul className={s.list}>
                        <li>Язык программирования LUA</li>
                        <li>3D моделирование</li>
                        <li>Анимация, визуальные и звуковые эффекты</li>
                        <li>Создание 3D игр</li>
                    </ul>
                    <img src="" alt="" />
                </div>
            </div>
        </section>
    );
};
