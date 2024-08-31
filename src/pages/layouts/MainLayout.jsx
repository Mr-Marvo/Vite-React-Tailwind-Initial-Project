import React, { useEffect, useState } from "react";
import { Button, Layout, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Sidebar from "./Sidebar";
import { MdMenu } from "react-icons/md";
import { Outlet } from "react-router-dom";

const { Text } = Typography;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  }, []);

  return (
    <Layout className="w-full flex flex-row max-h-full h-screen">
      <Sider
        className={`
          ${
            collapsed
              ? "max-md:hidden b!g-primary"
              : "visible sider !bg-primary !max-w-[230px] !min-w-[230px] !w-[230px]"
          } sider-scroll`}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Sidebar collapsed={collapsed} />
      </Sider>
      <Layout className="bg-primary">
        <Header className="p-0 pt-4 bg-primary">
          <div className="flex">
            <Button
              type="text"
              icon={<MdMenu className="text-xl text-white" />}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            />
            <Text></Text>
          </div>
        </Header>
        <div className="w-full h-full rounded-l-xl p-2 bg-white">
          <Outlet />
        </div>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
