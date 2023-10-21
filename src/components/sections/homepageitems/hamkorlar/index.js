import React from "react";
import styles from "./index.module.scss";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { Hmk } from "../../../../db/hamkorlar";
import { useEffect, useState } from "react";

export default function Hamkorlar() {
  const [f, setF] = useState(0);
  const [s, setS] = useState(8);
  const [l, setL] = useState(Hmk.length);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      console.log(windowWidth);
      if (windowWidth >= 1080) {
        setS(8);
      } else if (windowWidth >= 831 && windowWidth < 1080) {
        setS(6);
      } else if (windowWidth >= 510 && windowWidth < 831) {
        setS(4);
      } else if (windowWidth < 510) {
        setS(1);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const prev = () => {
    f !== 0 && setS(s - s);
    f !== 0 && setF(f - s);
  };

  const next = () => {
    console.log(l, s, f);
    l !== s && setS(s + s);
    l !== s && setF(f + s);
    if (l === s || l - 1 === s || l - 2 === s) {
      setTimeout(() => {
        const windowWidth = window.innerWidth;
        setF(0);
        if (windowWidth >= 1080) {
            setS(8);
          } else if (windowWidth >= 831 && windowWidth < 1080) {
            setS(6);
          } else if (windowWidth >= 510 && windowWidth < 831) {
            setS(4);
          } else if (windowWidth < 510) {
            setS(1);
          }
      }, 10);
    }
  };

  return (
    <div className={styles.hmk}>
      <div className={styles.httl}>ПАРТНЕРЫ</div>
      <div className={styles.fg}>
        {Hmk.slice(f, s).map((r, index) => (
          <div className={styles.card} key={index}>
            <img src={r.img} className={styles.mg} />
          </div>
        ))}
        <div className={styles.btns}>
          <div className={styles.prev} onClick={prev}>
            <FcPrevious className={styles.sv} />
          </div>
          <div className={styles.next} onClick={next}>
            <FcNext />
          </div>
        </div>
      </div>
    </div>
  );
}
