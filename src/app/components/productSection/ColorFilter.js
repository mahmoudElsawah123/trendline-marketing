"use client"
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-orange-500",
  ];

const ColorFilter = () => {
      const [selectedIndex, setSelectedIndex] = useState(2);
          const t = useTranslations('Filter');
      
  return (
    <div>
       <div className="collapse my-3">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-[#f5f5f5] flex justify-between items-center">
          <span className="text-[17px] text-[#333]">{t('Color')}</span>
          <FaArrowUp size={14} className="text-[#333]" />
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-4 my-4 gap-[10px]">
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-[32px] h-[32px] rounded-full cursor-pointer ${color} ${
                  selectedIndex === index ? "ring-4 ring-gray-700" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorFilter
