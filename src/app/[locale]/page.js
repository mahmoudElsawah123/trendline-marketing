import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import FirstBreadCrumb from "../components/Breadcrumbs/FirstBreadCrumb";
import ProductContainer from "../components/productSection/ProductContainer";
import {setRequestLocale} from 'next-intl/server';
import CardSliderContainer from "../components/card-slider/CardSliderContainer";

const page = async({params}) => {
  const param = await params;
  setRequestLocale(param);
  return (
    <>
      <header>
         <Banner/>
      </header>
      <section>
        <FirstBreadCrumb/>
      </section>
      <section>
        <CardSliderContainer param={param.locale}/>
      </section>
      <section>
        <ProductContainer param={param.locale}/>
      </section>
    </>
  );
};

export default page;
