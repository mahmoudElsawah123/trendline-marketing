import { useTranslations } from "next-intl";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const FilterPrice = () => {
      const t = useTranslations('Filter');
    
  return (
    <div>
      <div className="collapse my-3">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-[#f5f5f5] flex justify-between items-center">
          <span className="text-[17px] text-[#333]">{t("Price")}</span>
          <FaArrowUp size={14} className="text-[#333]" />
        </div>
        <div className="collapse-content">
          <div className="my-4">
            <div className="flex gap-3">
              <input
                type="tel"
                placeholder="From"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="tel"
                placeholder="To"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <button className="btn btn-primary bg-[#1A4B7B] mt-4 w-full">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPrice;
