import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-gray-200">
      <div className="w-11/12 mx-auto ">
        <Navbar></Navbar>
        <div className="pt-24">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
