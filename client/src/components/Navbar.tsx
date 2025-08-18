import { AlignJustify, Bell, Loader2, SquarePen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useAuth";

type NavbarProps = {
  isSidebarVisible: boolean;
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isSidebarVisible, setIsSidebarVisible }: NavbarProps) => {
  const { mutate: logout, isPending } = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        navigate("/signin");
      },
    });
  };
  return (
    <div className="w-screen h-16 border border-b-base-200 shadow-sm px-3 sm:px-5 lg:px-8">
      <nav className="w-full h-full flex justify-between items-center">
        <div className="flex items-center gap-6  cursor-pointer max-w-[50%]">
          <AlignJustify
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            className="w-6 h-6 text-base-content/60"
          />

          <Link to="/home">
            <h1 className="text-2xl font-bold hidden md:inline">Blogify</h1>
          </Link>

          <label className="input rounded-2xl hidden md:flex w-xl">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>

        <div className="flex items-center gap-7">
          <Link
            to="/write"
            className="flex gap-2 items-center justify-center text-base-content/60 font-semibold cursor-pointer"
          >
            <SquarePen
              strokeWidth={1}
              className="font-light size-5 text-base-content/60"
            />{" "}
            Write
          </Link>
          <Bell
            strokeWidth={1}
            className="font-light size-5 text-base-content/60 cursor-pointer hidden md:inline"
          />
          <button
            onClick={handleLogout}
            className="btn btn-sm md:btn-md btn-neutral rounded-3xl"
          >
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Logout"
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
