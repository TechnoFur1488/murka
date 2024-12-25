import s from "./Country.module.css";

export const Country = () => {
    return (
        <div className={s.container}>
            <div className={s.divWidth}>
                <div className={s.cif}>
                    <span>Цифровая</span>
                </div>
                <div className={s.contryDiv}>
                    <span>СТРАНА ЧУДЕС</span>
                </div>
                <p>В robloxland дети осваивают цифровые навыки, которые помогут им ориентироваться в новой реальности и создавать игры, сайты и мультики</p>
            </div>
        </div>
    );
};
