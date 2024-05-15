"use client";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { sidebarLinks } from "@/constans";
import { cn } from "@/lib/utils";
import { Bars3Icon, Squares2X2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeNav = useSelectedLayoutSegment();
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-200 bg-gray-100 lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="hidden sm:inline text-xl sm:text-3xl text-primary font-bold"
          onClick={close}
          aria-label="Brand"
        >
          SGA
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="block w-6 text-gray-400" />
        ) : (
          <Bars3Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={cn("flex overflow-y-auto bg-gray-100 lg:static lg:block", {
          "fixed bottom-0 top-14 mt-px w-screen lg:w-full": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="w-3/4 space-y-6 px-2 pb-24 pt-5 sm:w-1/2 lg:w-full">
          <div className="space-y-1 p-4">
            <NavigationMenu>
              <NavigationMenuList>
                {sidebarLinks.map((link, i) => (
                  <NavigationMenuItem key={i}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        onClick={close}
                        className={`${navigationMenuTriggerStyle()} ${
                          activeNav === link.activeNav
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }`}
                      >
                        {link.icon}
                        <span>{link.title}</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>
        <span
          onClick={() => setIsOpen(false)}
          className="h-full w-1/4 bg-black bg-opacity-20 sm:w-1/2"
        ></span>
      </div>
    </div>
  );
};

export default Sidebar;
