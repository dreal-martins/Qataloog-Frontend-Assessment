import React from "react";
import { useAppContext } from "../../contexts";
import frenchIcon from "../../assets/icons/frenchIcon.svg";
import arrowDown from "../../assets/icons/chevronDownIcon.svg";
import avatar from "../../assets/images/avatar.svg";

export default function Header() {
  const { headerTitle } = useAppContext();

  return (
    <header className="h-[3.5rem] w-full flex justify-center items-center px-3">
      <div className="w-[95%] flex justify-between items-center bg-white">
        <h1 className="font-medium text-[1.25rem]">{headerTitle}</h1>

        <div className="flex justify-between items-center w-[30%]">
          <div className="flex justify-start items-center gap-2">
            <img src={frenchIcon} alt="icon" />
            <h1>French</h1>
            <img src={arrowDown} alt="icon" />
          </div>
          <div className="flex items-center justify-between">
            <img src={avatar} alt="img" />
            <h1>Qataloog Admin</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
