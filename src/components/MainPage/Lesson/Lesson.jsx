import s from "./Lesson.module.css";

export const Lesson = () => {
    return (
        <section>
            <div className={s.container}>
                <h2>Как проходит обычный <span className={s.span}>урок</span> на платформе robloxland?</h2>
                <div className={s.flex}>
                    <div className={s.div}>
                        <img src="/images/image 16.png" alt="" />
                        <div className={s.divSpan}>
                            <span className={s.spanB}>Первая встреча</span>
                        </div>
                        <p>Ученик подключается к платформе в соответствии с инструкциями, знакомится с учителем и одноклассниками</p>
                    </div>
                    <div className={s.div}>
                        <img src="/images/image 17.png" alt="" />
                        <div className={s.divSpan}>
                            <span className={s.spanB}>Практический подход</span>
                        </div>
                        <p>На каждом уроке ученик изучает новую тему, закрепляет знания на практике, а затем выполняет домашнее задание</p>
                    </div>
                    <div className={s.div}>
                        <img src="/images/image 19.png" alt="" />
                        <div className={s.divSpan}>
                            <span className={s.spanB}>Создание проекта</span>
                        </div>
                        <p>В середине обучения студент выбирает тему своего собственного проекта и начинает работу над ним</p>
                    </div>
                    <div className={s.div}>
                        <img src="/images/image 18.png" alt="" />
                        <div className={s.divSpan}>
                            <span className={s.spanB}>Презентация проекта</span>
                        </div>
                        <p>Ученик публикует свой проект в интернете и представляет его на выпускном курсе</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
