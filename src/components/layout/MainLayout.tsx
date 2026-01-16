import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import RouteLoader from "../UI/RouteLoader";
import MobileBottomNav from "./MobileBottomNav";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
       <RouteLoader>
      <main className="flex-1">
        <Outlet />
      </main>
      </RouteLoader>
      
      <MobileBottomNav />
    </div>
  );
};

export default MainLayout;
