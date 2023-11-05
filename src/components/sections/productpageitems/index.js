import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { mahsulot } from "../../../db/product";
import { Link } from "react-router-dom";
import ProductSwiper from "../../swiper/ProductlarSwiper";

export default function ProductItems() {
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
    <>
      <div className={styles.mahsulot}>
        <div className={styles.container}>
          <div className={styles.ttl}>
            <p>ПРОДУКЦИЯ</p>
          </div>
          <div className={styles.tplmmahsulot}>
            {windowWidth < 1202 ? (
              <ProductSwiper qy={windowWidth<1202&&windowWidth>780?2:1}/>
            ) : (
              mahsulot.map((r, index) => (
                <div className={styles.card} key={index}>
                  <img className={styles.cardImg} src={r.img} style={r.style} />
                  <p className={styles.text}>{r.text}</p>
                  <Link to="/buildPage">
                    <button className={styles.btn}>Посмотреть все</button>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
