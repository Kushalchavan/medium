import Blogs from "../components/Blogs";
import Widgets from "../components/Widgets";

const Home = () => (
  <div className="w-screen h-full flex justify-between ml-10">
    <Blogs />
    <Widgets />
  </div>
);
export default Home;
