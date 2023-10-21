import React, { useState } from "react";
import styles from "./index.module.scss";
import slide1 from "../../../../assets/images/slide1.png";
import slide2 from "../../../../assets/images/slide2.png";
import slide3 from "../../../../assets/images/slide3.png";
import Ellipse6 from "../../../../assets/images/Ellipse6.png";
import Ellipse7 from "../../../../assets/images/Ellipse7.png";
import Button from "../../../button";

export default function Head() {
  const [index, setIndex] = useState(0);

  const myArray = [
    {
      title: "Анализатор ABL800 FLEX",
      text: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
      img: slide1,
    },
    {
      title: "Аппарат ИК-лазерный МАКДЭЛ-09.1",
      text: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
      img: slide2,
    },
    {
      title: "Глюкометр для измерения глюкозы",
      text: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
      img: slide3,
      style: {
        width: "561px",
        height: "773px",
        flexShrink: "0",
      },
    },
  ];

  return (
    <div className={styles.head}>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>{myArray[index].title}</p>
          <p>{myArray[index].text}</p>
          <Button btnName='Подробнее' />
        </div>
        <div className={styles.fimg}>
          <div className={styles.back}>
            <img src={myArray[index].img} className={styles.rasm} style={myArray[index].style}/>
          </div>
        </div>
      </div>
      <div className={styles.forScroll}>
        <img
          src={Ellipse7}
          className={styles.findex}
          onClick={() => {
            setIndex(0);
          }}
        />
        <img
          src={Ellipse6}
          className={styles.findex}
          onClick={() => {
            setIndex(1);
          }}
        />
        <img
          src={Ellipse7}
          className={styles.findex}
          onClick={() => {
            setIndex(2);
          }}
        />
      </div>
    </div>
  );
}
