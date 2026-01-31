"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constant";

const NavItems = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";

    return pathname.startsWith(path);
  };

  return (
    <ul className="flex flex-col sm:flex-row gap-3 sm:gap-10 p-2 font-medium">
      {NAV_ITEMS.map(({ label, href }) => (
        <li key={`${label}-${href}-nav-items`}>
          <Link
            href={href}
            className={`hover:text-yellow-500 transition-colors ${isActive(href) ? "text-gray-100" : ""}`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
