"use client";
import { useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const ChangeLang = () => {
  const router = useRouter();
  const param = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (locale) => {
    router.push("/", { locale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="bg-[#E8EDF2] px-4 py-2 rounded-md flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {param.locale.toUpperCase()}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <button
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
            onClick={() => handleLanguageChange("en")}
          >
            English
          </button>
          <button
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
            onClick={() => handleLanguageChange("ar")}
          >
            العربية
          </button>
        </div>
      )}
    </div>
  );
};

export default ChangeLang;