import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { New } from "../../../../db/news";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import Button from "../../../button";
import arrow from "../../../../assets/images/arrow.png";
import { Link } from "react-router-dom";

export default function News() {
  const [f, setF] = useState(0);
  const [s, setS] = useState(1);
  const [l, setL] = useState(New.length);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      console.log(windowWidth);
      if (windowWidth >= 1024) {
        setS(3);
      } else if (windowWidth >= 680 && windowWidth < 1152) {
        setS(2);
      } else {
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
    console.log(l,s,f)
    l !== s && setS(s + s);
    l !== s && setF(f + s);
    if (l === s || l - 1 === s || l - 2 === s) {
      setTimeout(() => {
        const windowWidth = window.innerWidth;
        setF(0)
        if (windowWidth >= 1024) {
          setS(3);
        } else if (windowWidth >= 680 && windowWidth < 1152) {
          setS(2);
        } else {
          setS(1);
        }
      }, 10);
    }
  };

  return (
    <div className={styles.new}>
      <div className={styles.nttl}>НОВОСТИ</div>
      <div className={styles.frry}>
        {New.slice(f, s).map((r, index) => (
          <div className={styles.card} key={index}>
            <img src={r.img} className={styles.cimg} />
            <p className={styles.tt}>{r.title}</p>
            <p className={styles.sana}>{r.data}</p>
            <p className={styles.text}>{r.text}</p>
            <Button btnName="Подробнее" />
          </div>
        ))}
        <div className={styles.chk}>
          <div
            className={styles.prev}
            onClick={() => {
              prev();
            }}
          >
            <FcPrevious className={styles.sv} />
          </div>
          <div
            className={styles.next}
            onClick={() => {
              next();
            }}
          >
            <FcNext />
          </div>
        </div>
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
