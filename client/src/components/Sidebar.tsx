import {
  Bookmark,
  BookText,
  ChartColumnBig,
  ChevronRight,
  House,
  User,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-72 border-r border-r-base-300 h-[calc(100vh-64px)] flex flex-col justify-start items-center p-8 shadow-sm">
      <ul className="mb-5 w-full flex flex-col justify-start gap-4">
        <li className="flex gap-1">
          <House strokeWidth={1} /> Home
        </li>
        <li className="flex gap-1">
          <Bookmark strokeWidth={1} /> Library
        </li>
        <li className="flex gap-1">
          <User strokeWidth={1} />
          Profile
        </li>
      </ul>

      <ul className="mt-10 w-full flex flex-col justify-start gap-4">
        <li className="flex gap-1">
          {" "}
          <BookText strokeWidth={1} />
          Stories
        </li>
        <li className="flex gap-1">
          <ChartColumnBig strokeWidth={1} /> Stats
        </li>
      </ul>

      <hr className="w-full h-[2px] mt-7 mb-7 text-neutral-200" />

      <div className="flex flex-col gap-4">
        <h2 className="text-semibold flex items-center gap-1">
          Following <ChevronRight strokeWidth={1} />
        </h2>

        <p className="mt-3 text-xs font-semibold text-base-content/80 flex items-center gap-2">
          <User strokeWidth={1} />{" "}
          <span>Discover more writers and publications to follow.</span>
        </p>

        <p className="text-xs underline">see suggestions</p>
      </div>
    </aside>
  );
};
export default Sidebar;
