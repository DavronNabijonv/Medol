import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { MdLocationPin } from "react-icons/md";
import { BiSolidPhoneCall, BiSearchAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import logo1 from "../../assets/images/logo1.png";
import uzb from "../../assets/images/uzb.png";
import rus from "../../assets/images/rus.png";
import eng from "../../assets/images/eng.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [lang, setLang] = useState("Русский");
  const [forImg, setForImg] = useState(rus);
  const [izl, setIzl] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleHandle = () => {
    setOpen(!open);
  };

  const handleDropDown = () => {
    setDrop(!drop);
  };

  const handleLangeChange = (newLang, newForImg) => {
    setDrop(!drop);
    setLang(newLang);
    setForImg(newForImg);
  };

  return (
    <nav>
      <div className={styles.nav}>
        {/* birinchi qism */}
        <div className={styles.first}>
          {/* contact */}
          {innerWidth > 1024 && (
            <div className={styles.icon}>
              <div className={styles.icon1}>
                <button className={styles.location}>
                  <MdLocationPin />
                </button>
                <p>г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
              </div>
              <div className={styles.icon2}>
                <button className={styles.location}>
                  <BiSolidPhoneCall />
                </button>
                <p>
                  <p>+998 71 276-62-53</p>
                  <p>+998 71 276-62-54</p>
                </p>
              </div>
            </div>
          )}
          {/* contact tugashi */}
          <img src={logo1} className={styles.logo} />
          {/* translate, search facebook */}
          <div className={styles.addition}>
            {innerWidth < 1024 && innerWidth > 508 && (
              <div className={styles.fortblt}>
                <button className={styles.location}>
                  <BiSolidPhoneCall />
                </button>
                <button className={styles.location}>
                  <MdLocationPin />
                </button>
              </div>
            )}
            <div className={izl ? styles.searchOpen : styles.search}>
              <btn
                className={izl ? styles.selected : styles.btn}
                onClick={() => {
                  setIzl(!izl);
                }}
              >
                <BiSearchAlt />
              </btn>
              <input
                className={izl ? styles.npt : styles.nptDisp}
                type="text"
                placeholder="Поиск по сайту"
                onChange={(e) => {}}
              />
            </div>
            <div className={izl ? styles.nptDisp : styles.face}>
              <button>
                <FaFacebookF /> Мы на Facebook
              </button>
            </div>

            {/* pastki qism dropdown button bo`ladi */}
            <div className={izl ? styles.nptDisp : styles.translater}>
              <div onClick={handleDropDown} className={styles.dropdown}>
                <img src={forImg} className={styles.flag} />
                {innerWidth > 1024 && <p className={styles.drp}>{lang}</p>}
                <FiChevronDown />
              </div>
              {/* dropdown items */}
              <div className={drop ? styles.dropdownitems : styles.disp}>
                <div onClick={() => handleLangeChange("Русский", rus)}>
                  <img src={rus} className={styles.flag} />{" "}
                  <p className={styles.drp}>Русский</p>
                </div>
                <div onClick={() => handleLangeChange("English", eng)}>
                  <img src={eng} className={styles.flag} />{" "}
                  <p className={styles.drp}>English</p>
                </div>
                <div onClick={() => handleLangeChange("O’zbekcha", uzb)}>
                  <img src={uzb} className={styles.flag} />{" "}
                  <p className={styles.drp}>O’zbekcha</p>
                </div>
              </div>
            </div>
            {/* dropdown qismi tugashi */}
          </div>
          {/* translate, search facebook  tugashi*/}
        </div>
        {/* birinchi qismini tugashi */}

        {/* ikkinchi qism */}
        <div
          className={open ? styles.bckg : styles.bckg2}
          onClick={toggleHandle}
        >
          <div onClick={toggleHandle} className={styles.scr}>
            <HiOutlineMenuAlt2 />
          </div>
        </div>
        <div className={styles.second}>
          <ul className={open && styles.menu}>
            <li> МАГАЗИН</li>
            <li className={styles.active}>О КОМПАНИИ </li>
            <li>ПРОДУКЦИЯ </li>
            <li>УСЛУГИ </li>
            <li>АКЦИИ И НОВОСТИ </li>
            <li>ОБРАТНАЯ СВЯЗЬ</li>
          </ul>
        </div>
        {/* ikkinchi qismni tugashi */}
      </div>
    </nav>
  );
}
