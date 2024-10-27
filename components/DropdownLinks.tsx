import Link from "next/link";
import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
  menuLinks: string[];
}

function DropdownLinks({ isOpen, toggleMenu, menuLinks }: Props) {
  const router = useRouter();
  const pathName = usePathname();

  const activeClass = "text-primary ";
  const normalClass = "px-8 py-2 font-semibold hover:bg-slate-300";
  //   useEffect(() => {
  //     toggleMenu();
  //   }, [isOpen]);

  return (
    <div className="relative">
      <ul
        hidden={!isOpen}
        className="bg-slate-100 z-10 text-text-1/80 absolute right-1 rounded-md shadow-md"
      >
        {menuLinks.map((item) => (
          <li
            className={
              item === pathName ? activeClass + normalClass : normalClass
            }
            onClick={() => router.push(item)}
          >
            {capitalizeFirstLetter(item)}
          </li>
        ))}
        <button
          className="btn"
          onClick={() => {
            router.push("/contact");
          }}
        >Let's Talk Business</button>
      </ul>
    </div>
  );
}

export default DropdownLinks;
