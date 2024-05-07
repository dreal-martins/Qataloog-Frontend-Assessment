import React, { useState } from "react";
import logo from "../../assets/images/halfLogo.svg";
import logo_full from "../../assets/images/logo.svg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSidebarContext } from "../../contexts/sidebarContext";
import Logout from "../Icons/Logout";
import Rectangle from "../Icons/Rectangle";

export default function Sidebar({ children }) {
  const { expanded, setExpanded } = useSidebarContext();

  return (
    <aside className="h-full">
      <nav className="h-full flex flex-col justify-center bg-white border-r shadow-sm">
        <div className="p-3 pb-2  flex justify-between items-center relative">
          {expanded ? (
            <img
              src={logo_full}
              alt="phylar logo"
              className={`transition-all h-[35px] w-[138px] `}
            />
          ) : (
            <img
              src={logo}
              alt="phylar logo"
              className={`transition-all w-[38px] h-[30px]`}
            />
          )}

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="absolute p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 -right-4"
          >
            {expanded ? <FaAngleLeft size={18} /> : <FaAngleRight size={18} />}
          </button>
        </div>

        <div className="flex-1 px-3 mt-10 flex flex-col">{children}</div>

        <div className="border-t flex flex-col p-3">
          <SidebarItem
            active={false}
            text={"Logout"}
            path={"/auth"}
            icon={<Logout />}
          />
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, path, pathlist }) {
  const { expanded } = useSidebarContext();
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleRoute = () => {
    if (path) {
      navigate(`${path}`);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleRoute}
      className={`group py-2 cursor-pointer relative  ${
        expanded && pathname === path ? "bg-[#FCD9D1] rounded-xl" : ""
      }`}
    >
      <div className={`flex items-center gap-1`}>
        {expanded && pathname === path && <Rectangle />}
        <span>
          {React.cloneElement(icon, {
            fillColor: isHovered || active ? "#F14119" : "#666666",
          })}
        </span>
        <span
          className={`overflow-hidden flex flex-col transition-all ${
            expanded ? "w-32 ml-3" : "w-0"
          }`}
        >
          <span
            className={`${
              pathname === path ? "text-main_color" : ""
            } hover:text-main_color`}
          >
            {text}
          </span>
        </span>
      </div>

      {!expanded && (
        <div
          className={`absolute left-8 top-3 rounded-md px-2 py-1 ml-4 bg-[#1F2734] text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-50`}
        >
          {pathlist ? (
            <ul
              className={`overflow-hidden transition-all duration-500 z-50 flex flex-col gap-3 p-2`}
            >
              {pathlist.map((list, i) => {
                return (
                  <li key={i}>
                    <Link to={list.path}>{list.text}</Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            text
          )}
        </div>
      )}
    </div>
  );
}
