"use client"
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const SizeFilter = () => {
    const t = useTranslations('Filter');
    const sizes = ["S", "M", "L", "XL", "XXL"];
      const [selectedSize, setSelectedSize] = useState(null);
    
  return (
    <div>
        <div className="collapse my-3">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-[#f5f5f5] flex justify-between items-center">
          <span className="text-[17px] text-[#333]">{t('Size')}</span>
          <FaArrowUp size={14} className="text-[#333]" />
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-3 my-4 gap-[10px]">
            {sizes.map((size, index) => (
              <div
                key={index}
                onClick={() => setSelectedSize(size)}
                className={`w-[60px] h-[32px] flex items-center justify-center rounded-full cursor-pointer border ${
                  selectedSize === size
                    ? "bg-gray-700 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SizeFilter
