import React from "react";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";
import { useTranslations } from "next-intl";

const ProductLang = ({data , subFilterCats}) => {
      const t = useTranslations('Filter');
    
  return (
    <div className="md:flex block items-start gap-10">
      <div className="md:max-w-[272px] md:w-[272px]">
        <div className="flex justify-between items-center">
          <h3 className="text-[20px] font-bold">{t('Filter_Option')}</h3>
          <span className="text-badgeColor text-[13px] font-semibold">
          {t('Clear_All')}
          </span>
        </div>
        <div className="flex flex-wrap justify-between items-center">
        <span className="text-[17px] text-secondary md:hidden block">
          {t('Showing')} {subFilterCats.current_page}-{subFilterCats.per_page} {t('of')}
            {subFilterCats.total} {t('results')}
          </span>
          <ProductFilter data={data} />

        </div>
      </div>
      <div className="flex-1">
        <div>
          <span className="text-[17px] text-secondary md:block hidden">
          {t('Showing')} {subFilterCats.current_page}-{subFilterCats.per_page} {t('of')}
            {subFilterCats.total} {t('results')}
          </span>
        </div>
        <ProductCard data={data} />
      </div>
    </div>
  );
};

export default ProductLang;
