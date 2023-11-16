import React from "react";
import styles from "./index.module.scss";
import { mahsulot } from "../../../../db/product";
import Button from "../../../button/index";
import { Link } from "react-router-dom";  

export default function Products() {
  return (
    <div className={styles.mhslt}>
      <div className={styles.title}>ПРОДУКЦИЯ</div>
      <div className={styles.prd}>
        {mahsulot.slice(0, 6).map((r, index) => (
          <div className={styles.card} key={index}>
            <img src={r.img} style={r.style} />
            <p>{r.text}</p>
            <Button btnName="Посмотреть все" />
          </div>
        ))}
      </div>
      <div className={styles.forAll}>
        <Link>
          Перейти в каталог нашей продукции
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            
          >
            <g clip-path="url(#clip0_502_221)">
              <path
                d="M30 14.7546C30 6.76329 23.2715 0.262695 15 0.262695C6.7285 0.262694 1.6232e-06 6.76329 1.27389e-06 14.7546C9.24573e-07 22.746 6.72967 29.2466 15 29.2466C23.2703 29.2466 30 22.746 30 14.7546ZM2.32377 14.7546C2.32377 8.00258 8.01006 2.50776 15 2.50776C21.9899 2.50776 27.6762 8.00258 27.6762 14.7546C27.6762 21.5078 21.9899 27.0015 15 27.0015C8.01006 27.0015 2.32377 21.5067 2.32377 14.7546Z"
                
              />
              <path
                d="M13.3966 21.1643L19.2061 15.5517C19.6569 15.1138 19.6569 14.4067 19.2061 13.9689L13.3966 8.35618C12.9621 7.99586 12.3196 7.99586 11.885 8.35618C11.3982 8.75918 11.3413 9.4686 11.7584 9.93897L16.7429 14.7547L11.7583 19.5816C11.3075 20.0194 11.3075 20.7265 11.7583 21.1643C12.2115 21.5999 12.9435 21.5999 13.3966 21.1643Z"
                
              />
            </g>
            <defs>
              <clipPath id="clip0_502_221">
                <rect
                  width="28.9839"
                  height="30"
                  fill="white"
                  transform="translate(30 0.262695) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
}
