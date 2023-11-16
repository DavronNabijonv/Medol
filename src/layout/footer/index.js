import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { TfiEmail } from "react-icons/tfi";
import { MdLocationPin } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import logo1 from "../../assets/images/logo1.png";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Footer() {
  const [states, setStates] = useState({
    username: "",
    phoneNumber: "",
    theme: "",
    text: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "40px 0", // Adjust padding as needed
      borderRadius: "10px", // Add border radius for rounded corners
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      zIndez: "1000", // Add a box shadow
      overflow: "hidden",
      width: "592px",
      height: "695px",
      flexShrink: "0",
      textAlign: "center",
    },
    overlay: {
      zIndex: "999",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    },
  };


  const customStyles2 = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "30px 0", // Adjust padding as needed
      borderRadius: "10px", // Add border radius for rounded corners
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      zIndez: "1000", // Add a box shadow
      overflow: "hidden",
      width: "280px",
      height: "500px",
      flexShrink: "0",
      textAlign: "center",
    },
    overlay: {
      zIndex: "999",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    },
  };


  const title = {
    color: "#5A5A5A",
    fontFamily: "var(--fontf)",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "600",
    lineheight: "normal",
    textAlign: "center",
  };

  const title2 = {
    color: "#5A5A5A",
    fontFamily: "var(--fontf)",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineheight: "normal",
    textAlign: "center",
  };

  const btn = {
    width: "270px",
    height: "70px",
    flexShrink: "0",
    borderRadius: "35px",
    opacity: "0.9",
    cursor: "pointer",
    background: "var(--background)",
    border: "none",
    color: "#FFF",
    textAlign: "center",
    fontFamily: "var(--fontf)",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    marginTop: "20px",
  };

  const btn2 = {
    width: "230px",
    height: "40px",
    flexShrink: "0",
    borderRadius: "35px",
    opacity: "0.9",
    cursor: "pointer",
    background: "var(--background)",
    border: "none",
    color: "#FFF",
    textAlign: "center",
    fontFamily: "var(--fontf)",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    marginTop: "20px",
  };

  const frormStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    alignItems: "center",
    marginTop: "20px",
  };

  const frormStyle2 = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
    marginTop: "30px",
  };

  const input = {
    borderRadius: "20px",
    background: "#F6F6F6",
    width: "80%",
    height: "56px",
    flexShrink: "0",
    color: "#8D8D8D",
    fontFamily: "var(--fontf)",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.72px",
    border: "none",
    paddingLeft: "20px",
  };

  const input2 = {
    borderRadius: "20px",
    background: "#F6F6F6",
    width: "80%",
    height: "38px",
    flexShrink: "0",
    color: "#8D8D8D",
    fontFamily: "var(--fontf)",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.72px",
    border: "none",
    paddingLeft: "10px",
  };

  const textarea = {
    borderRadius: "20px",
    background: "#F6F6F6",
    width: "80%",
    height: "156px",
    flexShrink: "0",
    color: "#8D8D8D",
    fontFamily: "var(--fontf)",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.72px",
    border: "none",
    paddingLeft: "20px",
    paddingTop: "20px",
    resize: "none",
  };
  const textarea2 = {
    borderRadius: "20px",
    background: "#F6F6F6",
    width: "80%",
    height: "100px",
    flexShrink: "0",
    color: "#8D8D8D",
    fontFamily: "var(--fontf)",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.72px",
    border: "none",
    paddingLeft: "10px",
    paddingTop: "15px",
    resize: "none",
  };

  const check = {
    width: "24px",
    height: "23.289px",
    flexShrink: "0",
    display: "inline",
  };

  const check2 = {
    width: "18px",
    height: "17.7px",
    flexShrink: "0",
    display: "inline",
  };

  const parag = {
    color: "#333",
    fontFamily: "var(--fontf)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.42px",
    display: "inline",
    width: "380px",
    textAlign: "start",
  };

  const parag2 = {
    color: "#333",
    fontFamily: "var(--fontf)",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.42px",
    display: "inline",
    width: "230px",
    textAlign: "start",
  };

  const divga = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  };

  const divga2 = {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              <button className={styles.btn} onClick={openModal}>
                Оставить заявку
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={openModal}
                contentLabel="Example Modal"
                style={windowWidth>600?customStyles:customStyles2}
              >
                <div className={styles.mdldiv}>
                  <p className={styles.mdlttl} style={windowWidth>600?title:title2}>
                    Оставьте заявку
                  </p>
                  <form style={frormStyle}>
                    <input
                      type="text"
                      value={states.username}
                      placeholder="ФИО"
                      onChange={(e) =>
                        setStates({ ...states, username: e.target.value })
                      }
                      style={windowWidth>600?input:input2}
                    />
                    <input
                      style={windowWidth>600?input:input2}
                      type="number"
                      placeholder="Номер телефона*"
                      value={states.phoneNumber}
                      onChange={(e) =>
                        setStates({ ...states, phoneNumber: e.target.value })
                      }
                    />
                    <input
                      style={windowWidth>600?input:input2}
                      type="text"
                      placeholder="Тема обращения*"
                      value={states.theme}
                      onChange={(e) =>
                        setStates({ ...states, theme: e.target.value })
                      }
                    />
                    <textarea
                      style={windowWidth>600?textarea:textarea2}
                      placeholder="Сообщение*"
                      value={states.text}
                      onChange={(e) =>
                        setStates({ ...states, text: e.target.value })
                      }
                    />
                    <div style={windowWidth>600?divga:divga2}>
                      <input type="checkbox" style={windowWidth>600?check:check2} />
                      <p style={windowWidth>600?parag:parag2}>
                        Отправляя заявку Вы соглашаетесь с политикой
                        конфиденциальности
                      </p>
                    </div>
                  </form>
                  <button onClick={openModal} style={windowWidth>600?btn:btn2}>
                    Отправить
                  </button>
                  {/* Change to closeModal */}
                </div>
              </Modal>
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