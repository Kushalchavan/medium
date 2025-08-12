import Blogs from "../components/Blogs";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

const DashboardLayout = () => {
  return (
    <>
        <Navbar/>
        <div className="w-screen h-full flex justify-between ">
        <Sidebar/>
        <Blogs/>
        <Widgets/>
        </div>
    </>
  )
}

export default DashboardLayout;