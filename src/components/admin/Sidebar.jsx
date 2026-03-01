"use client";

import { sidebarLinks } from "@/constans";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import AlertLogout from "./AlertLogout";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeNav = useSelectedLayoutSegment();
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b bg-card lg:bottom-0 lg:z-auto lg:w-64 lg:border-b-0 lg:border-r">
      {/* Header */}
      <div className="flex h-14 items-center justify-between px-4 lg:h-16 lg:px-6">
        <Link
          href="/"
          className="text-xl font-bold text-primary"
          onClick={close}
          aria-label="Brand"
        >
          SGA Admin
        </Link>
        <button
          type="button"
          className="lg:hidden p-1.5 rounded-md hover:bg-muted"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-5 h-5 text-muted-foreground" />
          ) : (
            <Bars3Icon className="w-5 h-5 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <div
        className={cn(
          "flex-1 overflow-y-auto bg-card lg:block",
          isOpen ? "fixed inset-0 top-14 z-50" : "hidden lg:flex lg:flex-col"
        )}
      >
        <div className="flex h-full flex-col bg-card lg:bg-transparent">
          <nav className="flex-1 px-3 py-4 space-y-1">
            {sidebarLinks.map((link, i) => {
              const isActive = activeNav === link.activeNav;
              return (
                <Link
                  key={i}
                  href={link.href}
                  onClick={close}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout at bottom */}
          <div className="p-3 border-t">
            <AlertLogout />
          </div>
        </div>

        {/* Backdrop for mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 -z-10 lg:hidden"
            onClick={close}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
