import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import userSave from "../../utils/userSave";

// social login component
const SocialLogin = () => {
  const { loading, setLoading, googleLogin } = useAuth();

  const location = useLocation();
  // redirect location pathname get. setting up to private route
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  // handle to google login
  const handleGLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        userSave(user);
        navigate(from, { replace: true });
      })
      .catch((err) => setLoading(false));
  };
  return (
    <div className=" w-full mt-3 text-center justify-center flex items-center ">
      <button
        onClick={handleGLogin}
        disabled={loading}
        className="rounded-full w-2/3 border py-1 px-2 flex items-center gap-2 duration-300 transition-all justify-center hover:border-[#1a379d]"
      >
        <span className="">Continue with</span>
        <FcGoogle className="" />
      </button>
    </div>
  );
};

export default SocialLogin;
