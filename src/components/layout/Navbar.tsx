import React from "react";
import { Link, NavLink } from "react-router-dom";
import type { NavItem } from "@/types/types";
import { navItems } from "@/data/LinkItems";

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between sm:justify-around lg:justify-around py-4 px-4">

        <Link to={"/"} className="text-base
        sm:opacity-70 
        sm:hover:opacity-100 
        lg:opacity-70 
        lg:hover:opacity-100 
        font-bold tracking-widest 
        uppercase">
          Cosmos X
        </Link>

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

        <span className="md:hidden text-xs uppercase">
          Design
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
