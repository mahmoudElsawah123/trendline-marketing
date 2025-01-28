"use client";
import React, { useEffect, useState, useCallback, useLayoutEffect, memo } from "react";
import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";
import { Pagination } from "uiw";
import { useParams, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

const ProductCard = ({ data }) => {
  const mainCat = data.data.main_category_details;
  const subCats = data.data.sub_categories.data;
  const param = useSearchParams().get('total');
  const [filterData, setFilterData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
      const t = useTranslations('Filter');

      useLayoutEffect(() => {
        const getLocalData = JSON.parse(localStorage.getItem('selectedMaterials')) || []; 
        const filtered = subCats.filter((subCat) => 
          getLocalData.includes(subCat.id)  
        );
        setFilterData(filtered);  
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [param]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <div className="hidden lg:block  bg-white border border-gray-200 rounded-lg shadow-sm ">
          <div className="relative">
            <Image
              className="p-3 rounded-t-lg w-full h-full"
              src={mainCat.image}
              alt="product image"
              width={180}
              height={180}
            />
            <button className="text-white xl:flex hidden gap-2 items-center justify-center text-[16px] w-[250px] m-auto absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-[#1A4B7B] hover:bg-[#1a2d7b] focus:ring-4 focus:outline-none font-medium rounded-lg px-3 py-2.5">
            {t('Btn')}
              <AiOutlineShopping size={20} />
            </button>
          </div>
          <div className="px-5 pb-5">
          <div className="flex items-center mt-2.5 mb-5">
                <div className="rating xl:rating-md md:rating-sm sm:rating-md rating-sm">
                  {[...Array(5)].map((_, index) => (
                    <input key={index} type="radio" name="rating-4" className="mask mask-star-2 bg-[#1A4B7B]" />
                  ))}
                </div>
                <div className="mx-3 text-[12px] sm:text-[16px]">
                  <span className="font-semibold">4.5</span>
                  <span className="text-secondary">(2910)</span>
                </div>
              </div>
            <h2 className="text-[16px] font-semibold ">{mainCat.name}</h2>
            <p className="line-clamp-2 text-[10px] text-secondary py-2">
              Grab attention and drive sales with eye-catching outdoor signage.
            </p>
            <span className="text-[20px] font-semibold">$260</span>
          </div>
        </div>

        {currentItems.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#" className="flex justify-center">
              <Image className="p-3 rounded-t-lg w-full h-full" src={item.image} loading="lazy" alt="product image" width={180} height={180} />
            </a>
            <div className="px-5 pb-5">
              <div className="flex items-center justify-between md:mt-2.5 md:mb-5">
                <div className="rating xl:rating-md md:rating-sm sm:rating-md rating-sm">
                  {[...Array(5)].map((_, index) => (
                    <input key={index} type="radio" name="rating-4" className="mask mask-star-2 bg-[#1A4B7B]" />
                  ))}
                </div>
                <div className="mx-3 text-[12px] sm:text-[16px]">
                  <span className="font-semibold">4.5</span>
                  <span className="text-secondary">(2910)</span>
                </div>
              </div>
              <h2 className="text-[16px] font-semibold ">{item.name}</h2>
              <p className="line-clamp-2 text-[10px] text-secondary py-2">
                Grab attention and drive sales with eye-catching outdoor signage.
              </p>
              <span className="text-[20px] font-semibold">$260</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination mt-10">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={filterData.length}
          divider
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default memo(ProductCard);