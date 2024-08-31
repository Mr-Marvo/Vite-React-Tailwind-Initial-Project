import { Menu, Typography } from "antd";
import React, { useState } from "react";
import { MdAccountBalance, MdContacts } from "react-icons/md";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images";

const { Text } = Typography;

const Sidebar = ({ collapsed }) => {
  const [openKeys, setOpenKeys] = useState(["1"]);

  const items = [
    getItem(
      <Link to="/" className="!text-white !text-lg !font-normal">
        Dashboard
      </Link>,
      "1",
      <MdAccountBalance className="!text-white !text-xl" />
    ),
    getItem(
      <Link to="/" className="!text-white !text-lg !font-normal">
        Client
      </Link>,
      "2",
      <MdContacts className="!text-white !text-xl" />
    ),

    // getItem("SECTION 1", "sub1", <BsBriefcaseFill />, [
    //   getItem(<Link to="/">Test one</Link>, "2", <GoDotFill />),
    // ]),
  ];

  const rootSubmenuKeys = ["sub1"];

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div className="bg-primary h-full">
      <div className="flex flex-row items-center justify-center w-full p-5 sticky top-0 z-10 gap-2">
        <img src={Logo} alt="logo" width={40} />
        {!collapsed && (
          <Text className="text-2xl font-medium text-white">Court Desk</Text>
        )}
      </div>
      <Menu
        id="toggleButton"
        className="text-base font-semibold bg-primary"
        mode="inline"
        items={items}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};

export default Sidebar;
