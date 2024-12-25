import s from "./Create.module.css";

export const Create = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>
        <h2>Мы создали <span className={s.span}>школу</span>, о которой сами <span className={s.span}>мечтали</span></h2>
        <p>В нашей школе мы используем современные методы обучения с применением знаний на практике и общаемся с учениками на равных, поддерживаем успехи и воспитываем восприятие ошибок как опыта</p>
      </div>
      <div className={s.flex}>
        <img src="/images/image 38.png" alt="" />
        <div className={s.divCard}>
            <p>В детстве мы хотели учиться в кругу единомышленников, получать поддержку от преподавателей и создавать крутые проекты, которые можно показать миру. Все это мы реализовали в robloxland — месте, где с 2018 года детские идеи превращаются в реальные проекты</p>
            <div className={s.divText}>
                <img src="/images/image 39.png" alt="" />
                <span>Команда robloxland</span>
            </div>
        </div>
      </div>
    </div>
  );
};
