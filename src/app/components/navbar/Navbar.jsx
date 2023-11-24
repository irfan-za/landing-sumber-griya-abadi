'use client'
import Link from "next/link";
import NavLink from "./NavLink";
import DarkModeTogleButton from "./DarkModeTogleButton";
import { HomeIcon, HomeModernIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import {usePathname} from "next/navigation"

const Navbar = () => {
  const path= usePathname()
  
  const navLinks = [
    {
      title: "Beranda",
      path: "/",
      isActive: `${path==='/' ? 'text-primary-500' : 'text-slate-700 dark:text-slate-200'}`,
      icon: (
        <HomeIcon className={`${path==='/' ? 'text-primary-500' : 'text-slate-700 dark:text-slate-200'}  sm:hidden h-6 w-6`} />
      )
    },
    {
      title: "Produk",
      path: "/products",
      isActive: `${path==='/products' ? 'text-primary-500' : 'text-slate-700 dark:text-slate-200'}`,
      icon: (
        <ShoppingBagIcon className={`${path==='/products' ? 'text-primary-500' : 'text-slate-700 dark:text-slate-200'} block sm:hidden h-6 w-6`} />
      )
    },
    {
      title: "Jasa",
      path: "/services",
      isActive: `${path==='/services' ? 'text-primary-500' : 'text-slate-700 dark:text-slate-200'}`,
      icon: (
        <HomeModernIcon className={`${path==='/services' ? 'text-primary-500' : 'text-slate-700 dark:text-slate-200'} block sm:hidden h-6 w-6`} />
      )
    },
  ];

  return (
    <nav
    className="fixed dark:border-[#33353F] dark:drop-shadow-none sm:drop-shadow-lg bg-white dark:bg-slate-700 bg-opacity-100 
    bottom-0 sm:top-0 z-50 w-5/6 max-w-[90%] h-fit sm:px-8  sm:py-4 py-2 rounded-t-lg sm:rounded-b-lg">
      <div className="flex items-center sm:justify-between">
        <Link
          href={"/"}
          className="hidden sm:inline text-xl sm:text-3xl text-primary-500 font-bold"
        >SGA</Link>
        <div className="sm:w-auto w-full" id="navbar">
          <ul className="sm:space-x-8 flex justify-evenly items-center h-full">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} icon={link.icon} isActive={link.isActive} />
              </li>
            ))}
            <div className=" hidden sm:block">
              <DarkModeTogleButton/>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
