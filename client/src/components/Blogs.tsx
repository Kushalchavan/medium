import { Heart, MessageCircle } from "lucide-react";
import Icon from "../assets/logo.jpeg";
import { useBlogs } from "../hooks/useBlog";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { data: blogs, isLoading } = useBlogs();

  if (isLoading) return <p>loading blogs...</p>;
  return (
    <div className="w-[840px] flex flex-col gap-10">
      <div className="p-4 w-full flex justify-between mt-5 gap-4 cursor-pointer hover:bg-base-300/50 transition">
        {/* left */}
        <div>
          <div className="flex items-center gap-2">
            {" "}
            <img
              src={Icon}
              alt="author-image"
              className="size-6 rounded-full object-cover"
            />{" "}
            <span className="text-xs text-base-content/60 hover:underline">
              Saurav Mandal
            </span>
          </div>

          <div className="flex flex-col gap-2 mt-3">
            <h1 className="text-2xl font-bold text-wrap">
              Do Hard Things if You Want an Easy Life
            </h1>
            <p className="text-base-content/60">
              The one skill that changes everything
            </p>
          </div>

          <div className="w-full flex items-center gap-4 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 64 64"
            >
              <path
                fill="#FFC017"
                d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
              ></path>
            </svg>

            <span className="text-base-content/60 text-xs">Jun 13</span>

            <div className="flex items-center gap-2 text-base-content/60 text-xs">
              <Heart strokeWidth={1} size={15} />
              <span>694</span>
            </div>

            <div className="text-base-content/60 flex items-center gap-2 text-xs">
              <MessageCircle strokeWidth={1} size={15} />
              <span>7</span>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-50 h-30 mt-3">
          <img
            src={Icon}
            alt="post-image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>



      {blogs?.map((blog) => (
          <Link 
          to={`/blogs/${blog._id}`}
            key={blog._id}
            className="p-4 max-w-full flex justify-between mt-1 gap-4 cursor-pointer hover:bg-base-300/50 transition"
          >
            {/* left */}
            <div className="max-w-[70%]">
              <div className="flex items-center gap-2">
                {" "}
                <img
                  src={Icon}
                  alt="author-image"
                  className="size-6 rounded-full object-cover"
                />{" "}
                <span className="text-xs text-base-content/60 hover:underline">
                  {blog.author?.username}
                </span>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <h1 className="text-2xl font-bold text-wrap">{blog.title}</h1>
                <p className="text-base-content/60">{blog.content}</p>
              </div>

              <div className="w-full flex items-center gap-4 mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="#FFC017"
                    d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                  ></path>
                </svg>

                <span className="text-base-content/60 text-xs">Jun 13</span>

                <div className="flex items-center gap-2 text-base-content/60 text-xs">
                  <Heart strokeWidth={1} size={15} />
                  <span>694</span>
                </div>

                <div className="text-base-content/60 flex items-center gap-2 text-xs">
                  <MessageCircle strokeWidth={1} size={15} />
                  <span>7</span>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="w-50 h-30 mt-3">
              <img
                src={Icon}
                alt="post-image"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
      ))}
    </div>
  );
};
export default Blogs;
