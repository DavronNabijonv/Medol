import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import arrow from "../../../../assets/images/arrow.png";
import { Link } from "react-router-dom";
import { YangiliklarSwiper } from "../../../swiper/YangiliklarSwiper";

export default function News() {
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
    <div className={styles.new}>
      <div className={styles.nttl}>НОВОСТИ</div>
      <div className={styles.frry}>
        <YangiliklarSwiper
          nm={
            windowWidth > 1446
              ? 3
              : windowWidth <= 1446 && windowWidth >= 931
              ? 2
              : 1
          }
        />
      </div>
      <div className={styles.under}>
        <div className={styles.ft}>
          <Link>
            <p>Посмотреть все новости</p>
            <img src={arrow} />
          </Link>
        </div>
        <div className={styles.ft}>
          <Link>
            <p>Посмотреть все новости</p>
            <img src={arrow} />
          </Link>
        </div>
      </div>
    </div>
  );
}
