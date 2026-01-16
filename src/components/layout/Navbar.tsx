import React from "react";
import { NavLink } from "react-router-dom";
import type { NavItem } from "@/types/types";
import { navItems } from "@/data/LinkItems";

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto flex items-center justify-around py-4 px-4">

        <h1 className="text-sm font-bold tracking-widest uppercase">
          Cheikh Ndaiye
        </h1>

        <ul className="hidden md:flex text-black font-bold gap-10 text-sm tracking-widest uppercase">
          {navItems.map((item: NavItem) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "opacity-100 underline-offset-8 underline decoration-4"
                    : "opacity-70 hover:opacity-100"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-xs uppercase">
          Menu
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
