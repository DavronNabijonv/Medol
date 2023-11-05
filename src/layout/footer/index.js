import React from "react";
import styles from "./index.module.scss";
import { TfiEmail } from "react-icons/tfi";
import { MdLocationPin } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import logo1 from "../../assets/images/logo1.png";

export default function Footer() {
  return (
    <div className={styles.ftr}>
      <div className={styles.container}>
        <div className={styles.forCntct}>
          <div className={styles.fr}>
            <img src={logo1} className={styles.mg} />
            <p className={styles.kp}>Контакты</p>
            <img src={logo1} className={styles.mg2} />
          </div>
          <div className={styles.fCnct}>
            <div className={styles.ph}>
              <div className={styles.first}>
                <div className={styles.cn}>
                  <MdLocationPin />
                </div>
                <p className={styles.lct}>
                  г.Ташкент, Чиланзар 10 квартал, дом 3/1
                </p>
              </div>
              <div className={styles.second}>
                <div className={styles.cn}>
                  <BiPhoneCall />
                </div>
                <p className={styles.nmb}>
                  +998 71 276-62-53 +998 71 276-62-54
                </p>
              </div>
            </div>
            <div className={styles.ml}>
              <div className={styles.sc}>
                <div className={styles.cn}>
                  <TfiEmail />
                </div>
                <p>info@medol.uz </p>
              </div>
              <button className={styles.btn}>Оставить заявку</button>
            </div>
            <p className={styles.fp}>
              Наша цель – построить прозрачный, долгосрочный бизнес, приносить
              огромную пользу населению, путем решения глобальных вопросов.
              Внедряя инновационные технологии на рынок Узбекистана.
            </p>
          </div>
        </div>
        <div className={styles.lnks}>
          <div className={styles.about}>
            <h4 className={styles.h4}>О компании</h4>
            <p>История</p>
            <p>Партнеры</p>
            <p>Вакансии</p>
          </div>
          <div className={styles.mhsl}>
            <h4 className={styles.h4}>Продукция</h4>
            <p>Эндоваскулярная хирургия</p>
            <p>Аритмология</p>
            <p>Кардиохирургия</p>
            <p>Лабораторная диагностика</p>
            <p>Хирургия</p>
            <p>Эндоурология</p>
            <p>Нейрохирургия</p>
            <p>Анестезиология и реанимация</p>
            <p>Диабет</p>
          </div>
          <div className={styles.srvc}>
            <h4 className={styles.h4}>Услуги</h4>
            <p>Сервис</p>
            <p>Регистрации</p>
            <p>Услуги логистики</p>
          </div>
        </div>
      </div>
      <div className={styles.trg}>
        <p>© 2021 ООО «Medical Online Services»</p>
        <p>
          Сайт разработан компанией <b>www.uz</b>
        </p>
      </div>
    </div>
  );
}
