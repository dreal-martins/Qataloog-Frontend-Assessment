import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";
import { ConfigProvider, Tabs } from "antd";
import Profile from "../../components/Profile";

const Settings = () => {
  const { setHeaderTitle } = useAppContext();

  const items = [
    {
      key: "1",
      label: "Profile",
      children: <Profile />,
    },
    {
      key: "2",
      label: "Password",
      children: "Content of Password",
    },
    {
      key: "3",
      label: "Subscriptions",
      children: "Content of Subscriptions",
    },
    {
      key: "4",
      label: "Publisher Earnings",
      children: "Content of Publisher Earnings",
    },
  ];

  useEffect(() => {
    setHeaderTitle("Settings");
  }, [setHeaderTitle]);
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: "#F14119",
            itemActiveColor: "#F14119",
            inkBarColor: "#F14119",
            itemHoverColor: "#F14119",
            titleFontSizeLG: 16,
            itemColor: "#666",
          },
        },
      }}
    >
      <div className="">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </ConfigProvider>
  );
};

export default Settings;
