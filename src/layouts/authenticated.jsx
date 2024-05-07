import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar, { SidebarItem } from "../components/SideBar";
import Header from "../components/Header";
import { useSidebarContext } from "../contexts/sidebarContext";
import DashboardIcon from "../components/Icons/Dashboard";
import UserIcon from "../components/Icons/Users";
import Admin from "../components/Icons/Admins";
import CouponCode from "../components/Icons/CouponCode";
import AcademyLevel from "../components/Icons/AcademyLevel";
import Platform from "../components/Icons/Platform";
import ContentType from "../components/Icons/ContentType";
import Withdrawals from "../components/Icons/Withdrawals";
import Settings from "../components/Icons/Settings";

export default function AuthenticatedLayout() {
  const [active, setActive] = useState(false);
  const [sidebarItems, setSidebarItems] = useState([]);
  const { expanded } = useSidebarContext();

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const sidebarData = [
      {
        text: "Dashboard",
        path: "/",
        icon: (
          <DashboardIcon
            active={pathname === "/" ? true : false}
            fillColor="#F14119"
          />
        ),
        active: pathname === "/" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "User",
        path: "/users",
        icon: <UserIcon active={true} fillColor="#F14119" />,
        active: pathname === "/users" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "Admins",
        path: "/admins",
        icon: <Admin active={true} fillColor="#F14119" />,
        active: pathname === "/admins" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "Coupon Code",
        path: "/coupon-code",
        icon: <CouponCode active={true} fillColor="#F14119" />,
        active: pathname === "/coupon-code" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "Academic Levels",
        path: "/academic-levels",
        icon: <AcademyLevel active={true} fillColor="#F14119" />,
        active: pathname === "/academic-levels" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "Platforms",
        path: "/platform",
        icon: <Platform active={true} fillColor="#F14119" />,
        active: pathname === "/platform" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "Content Type",
        path: "/content-type",
        icon: <ContentType active={true} fillColor="#F14119" />,
        active: pathname === "/content-type" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "Withdrawals",
        path: "/withdrawals",
        icon: <Withdrawals active={true} fillColor="#F14119" />,
        active: pathname === "/withdrawals" ? true : false,
        visible: true,
        pathlist: null,
      },
      {
        text: "Settings",
        path: "/setting",
        icon: <Settings active={true} fillColor="#F14119" />,
        active: pathname === "/setting" ? true : false,
        visible: true,
        pathlist: null,
      },
    ];

    setSidebarItems(sidebarData);
  }, [pathname]);

  const visibleSidebarItems = sidebarItems.filter((item) => item.visible);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  return (
    <div className={"h-full w-screen p-4 flex"}>
      <Sidebar>
        {visibleSidebarItems.map((items, i) => {
          const { active, icon, text, activeIcon, path, pathlist } = items;
          return (
            <SidebarItem
              key={i}
              active={active}
              icon={icon}
              activeIcon={activeIcon}
              path={path}
              pathlist={pathlist ? pathlist : null}
              text={text}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          );
        })}
      </Sidebar>
      <div
        className={`h-full flex flex-col items-center relative`}
        style={{ width: expanded ? "80%" : "100%" }}
      >
        <Header />
        <div
          className={`h-[calc(100vh-3.5rem)] bg-[#fafafa] w-full relative px-3`}
        >
          <div className="py-3 h-full w-[95%] m-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
