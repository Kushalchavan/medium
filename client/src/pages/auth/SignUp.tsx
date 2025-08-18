import { Eye, EyeOff, Loader2, Lock, Mail, User } from "lucide-react";
import login from "../../assets/auth.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../../hooks/useAuth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { mutate: signUp, isPending, error } = useSignUp();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    signUp({ name, email, password });
  };

  return (
    <div className="w-screen h-screen flex ">
      <div className="h-full w-full md:w-[50%] flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-[400px] p-4 border border-base-300 rounded-sm shadow-sm"
        >
          <h1 className="text-2xl font-bold text-center">Create Account</h1>
          <p className="font-semibold text-base-content/60 text-center">
            Get started with your account
          </p>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <User className="size-5 text-base-content/30" />
              </div>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full pl-10"
                placeholder="Enter name"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <Mail className="size-5 text-base-content/30" />
              </div>
              <input
                type="email"
                name="email"
                className={`input input-bordered w-full pl-10`}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <Lock className="size-5 text-base-content/30" />
              </div>
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                className={`input input-bordered w-full pl-10`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-5 text-base-content/30 cursor-pointer" />
                ) : (
                  <Eye className="size-5 text-base-content/30 cursor-pointer" />
                )}
              </button>
            </div>

            {error && (
              <p className="text-xs text-red-500 mt-1">
                {(error as Error).message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-neutral w-full">
            {isPending ? (
              <Loader2 className=" w-5 h-5 animate-spin" />
            ) : (
              "Sign Up"
            )}
          </button>

          <p className="font-semibold text-base-content/60 ">
            Already have an account{" "}
            <Link to="/signin" className="underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:inline w-[50%] h-screen">
        <img src={login} alt="image" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
export default SignUp;
