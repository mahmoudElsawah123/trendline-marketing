import React from "react";
import logo from '/public/images/logo.svg'
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/* Footer section */}
      <footer className="footer bg-[#fbfbfb] shadow-lg mt-5 text-base-content p-10">
        {/* Logo and description */}
        <aside>
          <Image src={logo} alt="ACME Industries logo" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        
        {/* Services navigation */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href="/branding">
            Branding
          </Link>
          <Link href="/design">
            Design
          </Link>
          <Link href="/marketing">
            Marketing
          </Link>
          <Link href="/advertisement">
            Advertisement
          </Link>
        </nav>

        {/* Company navigation */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about-us">
            About us
          </Link>
          <Link href="/contact">
            Contact
          </Link>
          <Link href="/jobs">
            Jobs
          </Link>
          <Link href="/press-kit">
            Press kit
          </Link>
        </nav>

        {/* Legal navigation */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href="/terms-of-use">
            Terms of use
          </Link>
          <Link href="/privacy-policy">
            Privacy policy
          </Link>
          <Link href="/cookie-policy">
            Cookie policy
          </Link>
        </nav>
      </footer>

      {/* Footer bottom section */}
      <div className="footer bg-[#1a4b7b] text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
        
        {/* Social media links */}
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link href="https://www.facebook.com">
            <FaFacebookF size={24} />
          </Link>
          <Link href="https://www.linkedin.com">
            <FaLinkedinIn size={24} />
          </Link>
          <Link href="https://www.twitter.com">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://www.telegram.org">
            <FaTelegramPlane size={24} />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
