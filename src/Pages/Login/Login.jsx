import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { userLogin, loading, setLoading } = useAuth();
  const [loginErr, setLoginErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handle to login user
  const handleLogin = (userInfo) => {
    console.log(userInfo);
    const email = userInfo.email;
    const password = userInfo.password;
    userLogin(email, password)
      .then((result) => {
        navigate(from, { replace: true });
        reset();
      })
      .catch((err) => {
        setLoading(false);
        if (err.message.includes("not-found")) {
          setLoginErr("Account not found! Please Sing up");
        } else if (err.message.includes("wrong")) {
          setLoginErr("password is wrong");
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="adm-container my-12 w-full pt-16">
        <div className="w-full max-w-lg mx-auto p-6 bg-gray-50 rounded shadow-md">
          <h1 className="text-3xl text-center font-semibold mb-8">
            Welcome to ADM
          </h1>
          <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "This Field is required *",
                })}
                type="email"
                name="email"
                placeholder="Enter email address"
                className="w-full border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
              />
              {errors?.email && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.email?.message}</small>
                </span>
              )}
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                {...register("password", {
                  required: "This Field is required *",
                })}
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full  border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
              />
              {errors?.password && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.password?.message}</small>
                </span>
              )}
            </div>
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary btn-md w-full mx-auto"
            >
              {loading ? "Loading" : "Login"}
            </button>
          </form>
          {loginErr && (
            <div className="text-center text-red-600 mt-4">
              <p>
                <small>{loginErr}</small>
              </p>
            </div>
          )}
          <p className="mt-8 text-sm text-black w-full text-center">
            Don't have an account? Please
            <Link to="/register" className="ms-2 text-primary font-semibold">
              Register Now
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
