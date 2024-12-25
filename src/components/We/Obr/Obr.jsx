import s from "./Obr.module.css";

export const Obr = () => {
  return (
    <div className={s.container}>
        <h2>Образовательные <span className={s.span}>принципы</span> robloxland</h2>
        <div className={s.flex}>
            <div className={s.card}>
                <img src="/images/image 30.png" alt="" />
                <p>Интересы и цели детей лежат в основе образовательного процесса</p>
            </div>
            <div className={s.card}>
                <img src="/images/image 31.png" alt="" />
                <p>Уметь критически мыслить и работать в команде — так же важно, как и программировать</p>
            </div>
            <div className={s.card}>
                <img src="/images/image 32.png" alt="" />
                <p>robloxland — безопасная среда, в которой дети могут учиться, творить и развиваться</p>
            </div>
        </div>
    </div>
  );
};
