import React from "react";
import styles from "./index.module.scss";
import { HeadSwiper } from "../../../swiper/HeadSwiper";

export default function Head() {
  return (
    <div className={styles.head}>
      <div className={styles.container}>
        <HeadSwiper />
      </div>
    </div>
  );
}
