import { items } from "@/data/LinkItems";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";
import { NavLink } from "react-router-dom";

const MobileBottomNav = () => {

     const isVisible = useHideOnScroll();
     
  return (
    <nav className={`md:hidden fixed bottom-0 inset-x-0 
        z-50 
        bg-white
        transition-transform duration-300 ease-out
        border-t
        ${isVisible ? "translate-y-0" : "translate-y-full"}
    `}>
      <ul className="flex justify-around py-2">
        {items.map(({ path, label, icon: Icon }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 text-xs ${
                  isActive
                    ? "opacity-100 underline-offset-[-46px] underline decoration-2"
                    : "opacity-70"
                }`
              }
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
