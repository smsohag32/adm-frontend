import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import userSave from "../../utils/userSave";
import uploadImage from "../../utils/uploadImage";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const { userRegister, loading, setLoading, userInfoUpdate, logOut } =
    useAuth();
  const [registerErr, setRegisterErr] = useState("");

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handle to login user
  const handleRegister = (userDetails) => {
    setRegisterErr("");
    const name = userDetails.name;
    const email = userDetails.email;
    const password = userDetails.password;
    const image = userDetails?.image[0];

    // upload image in imgbb
    uploadImage(image).then((imageInfo) => {
      const photo_url = imageInfo?.data?.display_url;

      // user create
      userRegister(email, password)
        .then((result) => {
          const user = result.user;
          // update user info
          userInfoUpdate(name, photo_url)
            .then(() => {
              // user log out
              userSave(user);
              logOut().then().catch();
              navigate("/login");
              reset();
            })
            .catch((err) => {
              setLoading(false);
            });
        })
        .catch((err) => {
          if (err.message.includes("already")) {
            setRegisterErr("Your already have a account please Login");
            setLoading(false);
          }
        });
    });
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center pt-16">
      <div className="adm-container my-5 w-full py-9">
        <div className="w-full max-w-xl mx-auto p-6 bg-white rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-8">Create an Account</h1>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="flex gap-6 flex-col md:flex-row">
              <div className="mb-2 w-full">
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "This Field is required *",
                  })}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
                />
                {errors?.name && (
                  <span className="text-red-600 block text-sm">
                    <small>{errors.name?.message}</small>
                  </span>
                )}
              </div>
              <div className="mb-2 w-full">
                <label
                  htmlFor="image"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Select profile photo
                </label>
                <input
                  {...register("image", {
                    required: "This Field is required *",
                  })}
                  className="w-full"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                />
                {errors?.image && (
                  <span className="text-red-600 block text-sm">
                    <small>{errors.image?.message}</small>
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-6 flex-col md:flex-row">
              <div className="mb-2 w-full">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "This Field is required *",
                  })}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
                />
                {errors?.email && (
                  <span className="text-red-600 block text-sm">
                    <small>{errors.email?.message}</small>
                  </span>
                )}
              </div>
              <div className="mb-4 w-full relative">
                <label className="block text-gray-700 font-semibold mb-2">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "This Field is required *",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
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
            </div>
            <button
              disabled={loading}
              type="submit"
              className="btn btn-md  btn-primary w-full mx-auto"
            >
              {loading ? "Loading" : "Register"}
            </button>
          </form>
          {registerErr && (
            <div className="text-center text-red-600 mt-4">
              <p>
                <small>{registerErr}</small>
              </p>
            </div>
          )}
          <p className="mt-8 text-sm text-black w-full text-center">
            Already have an account? Please
            <Link to="/login" className="ms-2 text-primary font-semibold">
              Login Now
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
