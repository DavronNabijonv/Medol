import React, { useState } from "react";
import styles from "./index.module.scss";
import qayd from "../../../../assets/images/qayd.png";
import kargo from "../../../../assets/images/kargo.png";
import xizmat from "../../../../assets/images/xizmat.png";
import Button from "../../../button";
import {MdNavigateNext} from 'react-icons/md';
import {GrFormPrevious} from 'react-icons/gr'

export default function Xizmatlar() {
  const [index, setIndex] = useState(1);
  const prev = () => {
    index > 1 && setIndex(index - 1);
  };
  const next = () => {
    index < 3 && setIndex(index + 1);
  };
  return (
    <div className={styles.services}>
      <div className={styles.stitle}>УСЛУГИ</div>
      <div className={styles.sitem}>
        <div className={styles.cont}>
          <div
            className={styles.old}
            onClick={index !== 1 ? prev : null}
          ><GrFormPrevious/> </div>
          <div className={styles.card} style={index===1?{display:'flex'}:{}}>
            <img src={xizmat} className={styles.cardimg} />
            <p className={styles.ttl}>СЕРВИС ОБОРУДОВАНИЯ</p>
            <p className={styles.prg}>
              Компания предоставляет сервисное обслуживание по всем
              предоставляемым продуктам. У наших инженеров имеется опыт и
              сертификаты фирм производителей......
            </p>
            <Button btnName="Подробнее" />
          </div>
          <div className={styles.card} style={index===2?{display:'flex'}:{}}>
            <img src={qayd} className={styles.cardimg} />
            <p className={styles.ttl}>СЕРВИС ОБОРУДОВАНИЯ</p>
            <p className={styles.prg}>
              Компания предоставляет сервисное обслуживание по всем
              предоставляемым продуктам. У наших инженеров имеется опыт и
              сертификаты фирм производителей......
            </p>
            <Button btnName="Подробнее" />
          </div>
          <div className={styles.card} style={index==3?{display:'flex'}:{}}>
            <img src={kargo} className={styles.cardimg} />
            <p className={styles.ttl}>СЕРВИС ОБОРУДОВАНИЯ</p>
            <p className={styles.prg}>
              Компания предоставляет сервисное обслуживание по всем
              предоставляемым продуктам. У наших инженеров имеется опыт и
              сертификаты фирм производителей......
            </p>
            <Button btnName="Подробнее" />
          </div>
          <div
            className={styles.kyng}
            onClick={index !== 3 ? next : null}
          > <MdNavigateNext/></div>
        </div>
      </div>
    </div>
  );
}
