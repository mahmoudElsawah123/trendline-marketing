import React, { Suspense } from "react";
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
        <Suspense>
            <ProductContainer param={param.locale}/>
        </Suspense>
      </section>
    </>
  );
};

export default page;
