import React, { useState } from "react";
import styles from "./index.module.scss";
import { New } from "../../../db/news";
import BuildPage from "../../../pages/buildPage";
import Button from "../../button";

export default function AksiyaPiace() {
  const [tg, setTg] = useState(true);
  return (
    <div className={styles.aksiya}>
      <div className={styles.container}>
        <div className={styles.aksttl}>
          <p>Новости и Акции</p>
        </div>
        <div className={styles.btns}>
          <button
            style={tg ? { background: "#0D4C93" } : { background: "#fff",color:"#5A5A5A" }}
          >
            Новости
          </button>
          <button
            style={tg ? { background: "#fff",color:"#5A5A5A" } : { background: "#0D4C93" }}
          >
            Акции
          </button>
        </div>
        {tg ? <Newlar /> : <BuildPage />}
      </div>
    </div>
  );
}

function Newlar() {
  return (
    <div className={styles.nes}>
      {New.map((r, index) => (
        <div className={styles.card} key={index}>
          <img src={r.img} className={styles.cimg} />
          <p className={styles.tt}>{r.title}</p>
          <p className={styles.sana}>{r.data}</p>
          <p className={styles.text}>{r.text}</p>
          <Button btnName="Подробнее" />
        </div>
      ))}
    </div>
  );
}
