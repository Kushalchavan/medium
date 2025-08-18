import {
  Bookmark,
  BookText,
  ChartColumnBig,
  ChevronRight,
  House,
  SquarePen,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/home", label: "Home", icon: <House strokeWidth={1} /> },
  { to: "/write", label: "Write", icon: <SquarePen strokeWidth={1} /> },
  { to: "/library", label: "Library", icon: <Bookmark strokeWidth={1} /> },
  { to: "/profile", label: "Profile", icon: <User strokeWidth={1} /> },
];

type SidebarProps = {
  isSidebarVisible: boolean;
};

const Sidebar = ({ isSidebarVisible }: SidebarProps) => {
  return isSidebarVisible ? (
    <aside className="w-64 border-r border-r-base-300 h-[calc(100vh-64px)] flex flex-col justify-start items-center p-8 shadow-sm">
      <ul className="mb-5 w-full flex flex-col justify-start gap-5">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex gap-1 transition hover:font-semibold ${
                  isActive ? "font-semibold" : "text-neutral-500"
                }`
              }
            >
              {item.icon} {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="mt-10 w-full flex flex-col justify-start gap-5 text-neutral-500 ">
        <li className="flex gap-1 hover:font-semibold">
          {" "}
          <BookText strokeWidth={1} />
          Stories
        </li>
        <li className="flex gap-1 hover:font-semibold">
          <ChartColumnBig strokeWidth={1} /> Stats
        </li>
      </ul>

      <hr className="w-full h-[2px] mt-7 mb-7 text-neutral-200" />

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold flex items-center gap-1">
          Following <ChevronRight strokeWidth={1} />
        </h2>

        <p className="mt-3 text-xs font-semibold text-base-content/80 flex items-center gap-2">
          <User strokeWidth={1} />{" "}
          <span>Discover more writers and publications to follow.</span>
        </p>

        <p className="text-xs underline">see suggestions</p>
      </div>
    </aside>
  ) : null;
};
export default Sidebar;
