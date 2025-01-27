import Banner from "@/app/components/banner/Banner";
import FirstBreadCrumb from "@/app/components/Breadcrumbs/FirstBreadCrumb";
import CardSliderContainer from "@/app/components/card-slider/CardSliderContainer";
import ProductContainer from "@/app/components/productSection/ProductContainer";
import { setRequestLocale } from "next-intl/server";
import React from "react";


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
