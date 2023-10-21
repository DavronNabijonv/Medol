import React from "react";
import styles from "./index.module.scss";
import { mahsulot } from "../../../../db/product";
import Button from "../../../button/index";
import {Link} from 'react-router-dom';
import arrow from '../../../../assets/images/arrow.png'

export default function Products() {
  return (
    <div className={styles.mhslt}>
      <div className={styles.title}>ПРОДУКЦИЯ</div>
      <div className={styles.prd}>
        {mahsulot.map((r, index) => (
          <div className={styles.card} key={index}>
            <img src={r.img} style={r.style} />
            <p>{r.text}</p>
            <Button btnName="Посмотреть все" />
          </div>
        ))}
      </div>
      <div className={styles.forAll}><Link>Перейти в каталог нашей продукции <img src={arrow}/></Link></div>
    </div>
  );
}
