import { useState } from "react";
import s from "./Reg.module.css";
import { useNavigate } from "react-router-dom";

export const Reg = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();  

  const handleSubmit = (event) => {
    if (!name.trim()) {
      event.preventDefault(); 
      alert("Введите имя!");
    } else {
      navigate("/"); 
    }
  };

  return (
    <section className={s.img}>
      <div className={s.container}>
        <img src="/images/robloxland.svg" alt="" />
        <div className={s.regDiv}>
          <h2>Войти</h2>
          <input
            placeholder="Имя" className={s.input} value={name} onChange={(e) => setName(e.target.value)} type="text"/>
          <button onClick={handleSubmit} className={s.ss}>Вход</button>
        </div>
      </div>
    </section>
  );
};
