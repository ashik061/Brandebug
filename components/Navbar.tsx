"use client";

import React, { useState } from "react";
import LogoText from "@/assets/images/logo-black-font.png";
import LogoIcon from "@/assets/images/icon.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import DropdownLinks from "./DropdownLinks";
import { capitalizeFirstLetter } from "../utils/helpers";

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(isMobileMenuOpen);
  };

  const activeClass = "text-primary scale-110 ";
  const normalClass = "hover:text-primary hover:scale-110";
  const links = ["/services", "/approach", "/portfolio", "/about"];

  return (
    <header className="border-b border-primary sticky top-0 z-50 bg-bg-1">
      <div className="py-3">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="flex items-center">
              <Image src={LogoIcon} alt="Logo" height={40} width={40} />
              <Image src={LogoText} alt="Logo" height={40} width={120} className="ml-3"/>
            </Link>
            <div>
              <FaBars
                className="h-7 w-7 lg:hidden"
                onClick={() => toggleMobileMenu()}
              />

              <DropdownLinks 
                isOpen = {isMobileMenuOpen}
                toggleMenu = {toggleMobileMenu}
                menuLinks = {links}
                
              />
            </div>
            <nav className="hidden lg:flex gap-10 items-center text-text-1/80 font-semibold">
              {links.map((item) => (
                <Link
                  key={item}
                  href={item}
                  className={
                    item === pathName ? activeClass + normalClass : normalClass
                  }
                >
                  {capitalizeFirstLetter(item)}
                </Link>
              ))}
              <button
                className="btn"
                onClick={() => {
                  router.push("/contact");
                }}
              >{`Let's Talk Business`}</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
