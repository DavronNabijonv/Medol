import React from "react";
import styles from './index.module.scss'
import Navbar from '../../layout/navbar'

export default function BuildPage() {
  return (
    <>
      <Navbar/>
      <div className={styles.pgbl}>Page is biuilding...</div>
    </>
  );
}
