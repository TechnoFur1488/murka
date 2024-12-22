import s from "./Why.module.css";

export const Why = () => {
  return (
    <section className={s.container}>
      <h2>Чем полезен курс Roblox для детей</h2>
      <div className={s.flex}>
        <div className={s.card}>
            <h4>Подготовка к будущему</h4>
            <p>Программирование — ценный навык во многих профессиях. От разработки программного  обеспечения до анализа данных. Это открывает множество перспектив для  карьерного роста.</p>
        </div>
        <div className={s.card}>
            <h4>Обучение 3D-моделированию</h4>
            <p>На курсе программирования в Roblox ребята придумывают собственные  здания, персонажей и окружающую обстановку с помощью компьютерной  графики.</p>
        </div>
        <div className={s.card}>
            <h4>Развитие критического мышления</h4>
            <p>Курсы программирования в Roblox развивают аналитическое мышление,  помогая детям понимать причинно-следственные связи и учат умению  поэтапно решать сложные задачи.</p>
        </div>
        <div className={s.card}>
            <h4>Навыки работы в команде</h4>
            <p>На занятиях всё устроено как в настоящей IT-компании: дети обсуждают  идеи, преодолевают трудности и совместно решают сложные задачи.</p>
        </div>
        <div className={`${s.card} ${s.last}`}>
            <h4>Развитие логики</h4>
            <p>Курсы по LUA в Roblox Studio знакомят детей с функциями, циклами,  переменными, типами данных и событиями. Это стимулирует работу мозга,  улучшает память и логическое мышление.</p>
        </div>
      </div>
    </section>
  );
};