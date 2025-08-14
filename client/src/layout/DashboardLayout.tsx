import { useState } from "react";
import Blogs from "../components/Blogs";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

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
        <Blogs />
        <Widgets />
      </div>
    </>
  );
};

export default DashboardLayout;
