import React from "react";
import styles from "./index.module.scss";
import { servicesdb } from "../../../db/servicesdb";

export default function ServicesPiaces() {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sttl}>
          <p>Наши услуги</p>
        </div>
        <div className={styles.cardPart}>
            {servicesdb.map((r, index)=>(
                <div className={styles.card}>
                    <img src={r.img} />
                    <p>{r.text}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
