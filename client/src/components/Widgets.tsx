import { Link } from "react-router-dom";
import personIcon from "../assets/logo.jpeg";

const Widgets = () => {
  return (
    <div className="hidden lg:inline w-86 h-auto border-l border-l-base-300 shadow-sm p-7">
      <h3 className="text-lg font-semibold">Staff Picks</h3>
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex gap-2 items-center">
          <img src={personIcon} alt="icon" className="size-7 rounded-full" />{" "}
          <span className="text-xs font-semibold text-base-content/60">
            Michelle Glauser
          </span>
        </div>
        <h2 className="text-lg font-bold leading-normal">
          How the #LookLikeAnEnginner Ad Campaign Happened Ten Years Ago
        </h2>
        <span className="text-xs text-base-content/60 ">Aug 3</span>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <div className="flex gap-2 items-center">
          <img src={personIcon} alt="icon" className="size-7 rounded-full" />{" "}
          <span className="text-xs font-semibold text-base-content/60">
            Michelle Glauser
          </span>
        </div>
        <h2 className="text-lg font-bold">
          How th #LookLikeAnEnginner Ad Campaign Happened Ten Years Ago
        </h2>
        <span className="text-xs text-base-content/60 ">Aug 3</span>
      </div>

      <div className="mt-7 w-full p-4 text-base-content bg-blue-300 flex flex-col gap-2 rounded-sm shadow-sm">
        <h2 className="font-bold">Writing on Blogify</h2>
        <p className="font-semibold">Join our Blogify Writing 101 Webinar</p>

        <p className="font-semibold">Read Blogify tips & tricks</p>
        <p className="font-semibold">Get practical Blogify writing advice</p>
        <Link to="/write">
          <button className="btn btn-neutral rounded-full btn-sm">
            Start writing
          </button>
        </Link>
      </div>

      <div className="mt-5">
        <h2 className="font-semibold mb-3">Recommended topics</h2>

        <div className="flex flex-wrap gap-3 mt-4">
          <button className="btn rounded-full">Writing</button>
          <button className="btn rounded-full">Machine Learning</button>
          <button className="btn rounded-full">Relationships</button>
          <button className="btn rounded-full">Politics</button>
          <button className="btn rounded-full">Crytocurrency</button>
          <button className="btn rounded-full">Business</button>
          <button className="btn rounded-full">Psychology</button>
        </div>
      </div>
    </div>
  );
};
export default Widgets;
