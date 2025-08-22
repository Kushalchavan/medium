import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-screen min-h-screen bg-base-100">
      <nav className="w-screen h-20 bg-base-200 border-b border-b-base-300 px-4 md:px-8 lg:px-12 py-2 flex justify-between items-center ">
        <h1 className="text-2xl font-bold">Blogify</h1>
        <div>
          <ul className="flex justify-between items-center gap-3">
            <li className="cursor-pointer font-semibold text-base-content/60">
              Our story
            </li>
            <li className="text-base-content/60 cursor-pointer font-semibold">
              Membership
            </li>
            <li className="cursor-pointer font-semibold text-base-content/60">
              Write
            </li>
            <li className="cursor-pointer font-semibold text-base-content/60">
              Sign in
            </li>
            <Link to="/signin">
              <button className="shadow-sm bg-black btn btn-md rounded-3xl text-white">
                Get started
              </button>
            </Link>
          </ul>
        </div>
      </nav>
      <main className="w-screen h-[calc(100vh-180px)] flex justify-center items-start flex-col gap-5 px-4 md:px-8 lg:px-12 py-2">
        <h1 className=" font-bold text-5xl md:text-7xl lg:text-8xl overflow-hidden">
          Human <br /> stories & ideas
        </h1>
        <p className="text-semibold text-xl text-base-content/60">
          A place to read, write and deepen your understanding
        </p>
        <Link to="/signin">
          <button className="bg-black btn md:btn-lg rounded-3xl text-white">
            Start reading
          </button>
        </Link>
      </main>

      <footer className="bg-base-200 h-24 border-t border-t-base-300 shadow-sm">
        <ul className="w-full h-full flex items-center justify-center gap-3 font-semibold text-base-content/60">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Help</li>
          <li className="hover:underline cursor-pointer">Term</li>
          <li className="hover:underline cursor-pointer">Privacy</li>
        </ul>
      </footer>
    </div>
  );
};
export default Landing;
