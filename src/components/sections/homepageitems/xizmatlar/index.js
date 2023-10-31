import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { HizmatlarSwiper } from "../../../swiper/HizmatlarSwiper";

export default function Xizmatlar() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.services}>
      <div className={styles.stitle}>УСЛУГИ</div>
      <div className={styles.sitem}>
        <div className={styles.cont}>
          <HizmatlarSwiper sh={innerWidth>1230?3:innerWidth<1230&&innerWidth>820?2:1} />
        </div>
      </div>
    </div>
  );
}
