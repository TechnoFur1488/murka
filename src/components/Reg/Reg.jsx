import { useState } from "react";
import s from "./Reg.module.css";
import { useDispatch } from "react-redux"

export const Reg = () => {
  const [name, setName] = useState("")

  const disp = useDispatch()


  return (
    <div className={s.container}>
      <input value={name} onChange={e => setName(e.target.value)} type="text" />
      <button >Сохранить</button>
    </div>
  );
};
