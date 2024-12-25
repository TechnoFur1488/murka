import s from "./Count.module.css";

export const Count = () => {
    return (
        <div className={s.container}>
            <h2>Больше, чем <span className={s.span}>цифры</span></h2>
            <div className={s.flex}>
                <div className={s.card}>
                    <span className={s.num}>750</span>
                    <span className={s.text}>Учителей</span>
                </div>
                <div className={s.card}>
                    <span className={s.num}>23.000</span>
                    <span className={s.text}>Учеников</span>
                </div>
                <div className={s.card}>
                    <span className={s.num}>33.000</span>
                    <span className={s.text}>Учеников</span>
                </div>
                <div className={s.card}>
                    <span className={s.num}>∞</span>
                    <span className={s.text}>Идей</span>
                </div>
            </div>
        </div>
    );
};
