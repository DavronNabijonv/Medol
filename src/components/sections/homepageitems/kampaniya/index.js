import styles from "./index.module.scss";
import React from "react";
import logo1 from "../../../../assets/images/logo1.png";
import Button from "../../../button";

export default function Kampaniya() {
  return (
    <div className={styles.kmp}>
      <div className={styles.kttl}>О КОМПАНИИ</div>
      <div className={styles.body}>
        <div className={styles.crc}>
          <div className={styles.brd}>
            <div className={styles.ins}>
              <img src={logo1} />
            </div>
          </div>
        </div>
        <div className={styles.prg}>
          <p>
            Группа компаний MEDOL создавалась высококвалифицированными
            специалистами в сфере медицины, инженерии и экономики, за плечами
            которых значительный опыт на рынке высоких медицинских технологий,
            которая имеет свои представительства в разных уголках Земли. В 2011
            году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online
            Services". Цель компании построить прозрачный долгосрочный бизнес,
            принести пользу обществу путем развития и внедрения передовых
            технологий в систему здравоохранения Республики Узбекистан.{" "}
          </p>
          <Button btnName='Узнать больше'/>
        </div>
      </div>
    </div>
  );
}
