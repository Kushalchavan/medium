import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import login from "../../assets/auth.jpg";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen flex ">
      <div className="h-full w-full md:w-[50%] flex justify-center items-center">
        <form className="space-y-6 w-[400px] border border-base-300 p-4 rounded-sm shadow-sm">
          <h1 className="text-2xl font-bold text-center">Create Account</h1>
          <p className="font-semibold text-base-content/60 text-center">
            Get started with your account
          </p>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="size-5 text-base-content/40" />
              </div>
              <input
                type="email"
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
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="size-5 text-base-content/40" />
              </div>
              <input
                type={showPassword ? "password" : "text"}
                className={`input input-bordered w-full pl-10`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-5 text-base-content/40" />
                ) : (
                  <Eye className="size-5 text-base-content/40" />
                )}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-neutral w-full">
            Create Account
          </button>

          <p className="font-semibold text-base-content/60 ">
            Don't have an account <span className="underline">Sign up</span>
          </p>
        </form>
      </div>

      <div className="hidden md:inline w-[50%] h-screen">
        <img src={login} alt="image" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
export default SignIn;
