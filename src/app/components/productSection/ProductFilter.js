"use client";
import { useTranslations } from "next-intl";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState, useCallback, memo } from "react";
import { FaArrowUp } from "react-icons/fa";

const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-orange-500",
];

const sizes = ["S", "M", "L", "XL", "XXL"];

const ProductFilter = ({ data }) => {
  const t = useTranslations('Filter');
  const subCats = data.data.sub_categories.data;
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [selectedSize, setSelectedSize] = useState(null);
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });

  // Initialize selected materials from localStorage or default to all
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("selectedMaterials"));

    // Check if localStorage is empty or not set
    if (!storedIds || storedIds.length === 0) {
      const allIds = subCats.map((item) => item.id); // Select all items
      setSelectedIds(allIds);
      localStorage.setItem("selectedMaterials", JSON.stringify(allIds));
    } else {
      setSelectedIds(storedIds);
    }
  }, [subCats]);

  // Save selected materials to localStorage when selectedIds changes
  useEffect(() => {
    localStorage.setItem("selectedMaterials", JSON.stringify(selectedIds));
  }, [selectedIds]);

  const handleSelectAll = useCallback(() => {
    if (selectedIds.length === subCats.length) {
      setSelectedIds([]); // Deselect all
    } else {
      setSelectedIds(subCats.map((item) => item.id)); // Select all
    }
  }, [selectedIds, subCats]);

  const handleCheckboxChange = useCallback((id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id)); // Remove id
    } else {
      setSelectedIds([...selectedIds, id]); // Add id
    }
  }, [selectedIds]);

  useEffect(() => {
    const queryString = `?page=1&total=${selectedIds.length}`;
    const currentUrl = window.location.pathname + queryString;

    window.history.replaceState(null, "", currentUrl);
  }, [selectedIds.length]);

  return (
    <div>
      {/* Material Section */}
      <div className="collapse my-3">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title bg-[#f5f5f5] flex justify-between items-center">
          <span className="text-[17px] text-[#333]">{t('Material')}</span>
          <FaArrowUp size={14} className="text-[#333]" />
        </div>
        <div className="collapse-content">
          <div className="form-control">
            {/* Select All Button */}
            <label className="label justify-start gap-5 cursor-pointer">
              <input 
                type="checkbox"
                className="checkbox"
                checked={selectedIds.length === subCats.length}
                onChange={handleSelectAll}
              />
              <span className="text-[#1A4B7B] font-bold"> {t('All')}</span>
            </label>

            {/* Individual Materials */}
            {subCats.map((item) => (
              <label className="label justify-start gap-5 cursor-pointer" key={item.id}>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedIds.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <span className="text-[#1A4B7B] font-bold">{item.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Color Section */}
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

      {/* Size Section */}
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

      {/* Price Section */}
      <div className="collapse my-3">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title bg-[#f5f5f5] flex justify-between items-center">
          <span className="text-[17px] text-[#333]">{t('Price')}</span>
          <FaArrowUp size={14} className="text-[#333]" />
        </div>
        <div className="collapse-content">
          <div className="my-4">
            <div className="flex gap-3">
              <input
                type="tel"
                placeholder="From"
                value={priceRange.from}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, from: e.target.value })
                }
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="tel"
                placeholder="To"
                value={priceRange.to}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, to: e.target.value })
                }
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <button className="btn btn-primary mt-4 w-full">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductFilter);
