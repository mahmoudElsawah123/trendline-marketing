import React from "react";
import logo from "/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useTranslations } from "next-intl";
import ChangeLang from "./ChangeLang";

const Navbar = () => {
  const t = useTranslations("Banner");

  return (
    <div className="bg-[#E8EDF2]" role="navigation">
      <div className="container">
        <div className="navbar px-4">
          <div className="flex-1 flex items-center">
            <Image
              src={logo}
              alt={t("logoAlt")}
              width={76}
              height={76}
              role="img"
            />
            <ul className="hidden lg:flex mx-10 gap-10">
              <li>
                <Link href="/" aria-label={t("navLinks.home")}>
                  {t("navLinks.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="border-b-2 pb-2 border-[#1A4B7B] text-[#1A4B7B] font-semibold"
                  aria-label={t("navLinks.categories")}
                >
                  {t("navLinks.categories")}
                </Link>
              </li>
              <li>
                <Link href="/about" aria-label={t("navLinks.about")}>
                  {t("navLinks.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" aria-label={t("navLinks.contact")}>
                  {t("navLinks.contact")}
                </Link>
              </li>
              <li>
                <Link href="/faqs" aria-label={t("navLinks.faqs")}>
                  {t("navLinks.faqs")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-none lg:flex hidden space-x-4">
            <button aria-label={t("actions.notifications")}>
              <IoNotificationsOutline size={18} />
            </button>
            <button aria-label={t("actions.cart")}>
              <HiOutlineShoppingBag size={18} />
            </button>
          <ChangeLang/>
            <button aria-label={t("actions.profile")}>
              <FaRegUser size={18} />
            </button>
          </div>

          <div className="flex lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-ghost">
              <FaBars className="text-xl" aria-label={t("drawerButton")} />
            </label>
          </div>
        </div>

        <div className="drawer sm:h-[100vh] md:h-0 absolute z-50">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            aria-label="Toggle navigation menu"
          />
          <div className="drawer-content"></div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="Close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
              <li>
                <Link href="/" aria-label={t("drawerLinks.home")}>
                  {t("drawerLinks.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="bg-[#1A4B7B] text-white"
                  aria-label={t("drawerLinks.categories")}
                >
                  {t("drawerLinks.categories")}
                </Link>
              </li>
              <li>
                <Link href="/about" aria-label={t("drawerLinks.about")}>
                  {t("drawerLinks.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" aria-label={t("drawerLinks.contact")}>
                  {t("drawerLinks.contact")}
                </Link>
              </li>
              <li>
                <Link href="/faqs" aria-label={t("drawerLinks.faqs")}>
                  {t("drawerLinks.faqs")}
                </Link>
              </li>
            </ul>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;