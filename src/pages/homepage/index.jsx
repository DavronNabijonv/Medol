import React from "react";
import Head from "../../components/sections/homepageitems/head";
import Products from "../../components/sections/homepageitems/products";
import Xizmatlar from "../../components/sections/homepageitems/xizmatlar";
import Kampaniya from "../../components/sections/homepageitems/kampaniya";
import News from "../../components/sections/homepageitems/yangiliklar";
import Hamkorlar from "../../components/sections/homepageitems/hamkorlar";

export default function Homepage() {
  return (
    <>
      <Head />
      <Products />
      <Xizmatlar />
      <Kampaniya />
      <News/>
      <Hamkorlar/>
    </>
  );
}
