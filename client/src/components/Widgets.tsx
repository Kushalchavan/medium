import personIcon from "../assets/logo.jpeg";

const Widgets = () => {
  return (
    <div className="hidden md:inline w-86 h-auto border-l border-l-base-300 shadow-sm p-7">
      <h3 className="text-lg font-semibold">Staff Picks</h3>
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

      <div className="mt-7 w-full p-4 bg-blue-200 flex flex-col gap-2 rounded-sm shadow-sm">
        <h2 className="font-bold">Writing on Blogify</h2>
        <p className="font-semibold">Join our Blogify Writing 101 Webinar</p>

        <p className="font-semibold">Read Blogify tips & tricks</p>
        <p className="font-semibold">Get practical Blogify writing advice</p>
        <button className="btn btn-neutral rounded-full btn-sm">
          Start writing
        </button>
      </div>
    </div>
  );
};
export default Widgets;
