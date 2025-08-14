import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);

  return (
    <>
      <Navbar
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
      <div className="w-screen h-full flex justify-between ">
        <Sidebar isSidebarVisible={isSidebarVisible} />
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
