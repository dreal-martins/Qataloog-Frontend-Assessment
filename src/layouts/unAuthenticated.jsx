import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export default function UnAuthenticatedLayout() {
  const year = new Date().getFullYear();

  return (
    <div className="h-full w-full flex">
      <div className="w-6/12 h-full pt-10 flex justify-center">
        <div className="w-[60%] h-full flex flex-col justify-between">
          <div className="h-[30%]">
            <img src={logo} alt="img" />
          </div>
          <div className="h-[50%]">
            <Outlet />
          </div>
          <div className="h-[20%] flex items-end py-2">
            <p className="text-[0.75rem] font-normal text-text_color">
              Qataloog © {year} . All Rights Reserved.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
