"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState, useCallback, memo } from "react";
import { FaArrowUp } from "react-icons/fa";
import FilterPrice from "./product-component/FilterPrice";
import SizeFilter from "./product-component/SizeFilter";
import ColorFilter from "./ColorFilter";
import { IoMdOptions } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const ProductFilter = ({ data }) => {
  const t = useTranslations("Filter");
  const subCats = data.data.sub_categories.data;
  const [selectedIds, setSelectedIds] = useState([]);
  // const [priceRange, setPriceRange] = useState({ from: "", to: "" });

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

  const handleCheckboxChange = useCallback(
    (id) => {
      if (selectedIds.includes(id)) {
        setSelectedIds(selectedIds.filter((itemId) => itemId !== id)); // Remove id
      } else {
        setSelectedIds([...selectedIds, id]); // Add id
      }
    },
    [selectedIds]
  );

  useEffect(() => {
    const queryString = `?page=1&total=${selectedIds.length}`;
    const currentUrl = window.location.pathname + queryString;
    window.history.replaceState(null, "", currentUrl);
  }, [selectedIds.length]);

  return (
    <div>
     <div className="hidden md:block">
        {/* Material Section */}
        <div className="collapse my-3">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title bg-[#f5f5f5] flex justify-between items-center">
          <span className="text-[17px] text-[#333]">{t("Material")}</span>
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
              <span className="text-[#1A4B7B] font-bold"> {t("All")}</span>
            </label>

            {/* Individual Materials */}
            {subCats.map((item) => (
              <label
                className="label justify-start gap-5 cursor-pointer"
                key={item.id}
              >
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
      <ColorFilter />

      {/* Size Section */}
      <SizeFilter />

      {/* Price Section */}
      <FilterPrice />
     </div>




      <div className="drawer block md:hidden">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="drawer-button btn btn-ghost">
       <IoMdOptions size={23}/>
    </label>
  </div>
  <div className="drawer-side z-50">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="menu bg-base-200 text-base-content min-h-full h-full w-[90%] p-4 overflow-y-scroll">
    <div>
       <div className="flex justify-between items-center">
       <h1 className="text-[20px] font-semibold ">Filter Option</h1>
        <IoClose size={30} className="text-error hover:shadow"
        onClick={()=> document.getElementById("my-drawer-2").checked = false}
        />
       </div>
        {/* Material Section */}
        <div className="collapse my-3">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title bg-[#f5f5f5] flex justify-between items-center">
          <span className="text-[17px] text-[#333]">{t("Material")}</span>
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
              <span className="text-[#1A4B7B] font-bold"> {t("All")}</span>
            </label>

            {/* Individual Materials */}
            {subCats.map((item) => (
              <label
                className="label justify-start gap-5 cursor-pointer"
                key={item.id}
              >
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
      <ColorFilter />

      {/* Size Section */}
      <SizeFilter />

      {/* Price Section */}
      <FilterPrice />
     </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default memo(ProductFilter);
