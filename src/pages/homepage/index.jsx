import React from "react";
import styles from './index.module.scss'
import Head from "../../components/sections/homepageitems/head";
import Products from "../../components/sections/homepageitems/products";
import Xizmatlar from "../../components/sections/homepageitems/xizmatlar";
import Kampaniya from "../../components/sections/homepageitems/kampaniya";
import News from "../../components/sections/homepageitems/yangiliklar";
import Hamkorlar from "../../components/sections/homepageitems/hamkorlar";
import Navbar from "../../layout/navbar";

export default function Homepage() {
  return (
    <>
    <div className={styles.backgroundImage}><Navbar/></div>
      <Head />
      <Products />
      <Xizmatlar />
      <Kampaniya />
      <News/>
      <Hamkorlar/>
    </>
  );
}
