import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import heroImage from "../../assets/animation/admission.json";
const Hero = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 min-h-[100vh] pt-16">
      <div className="adm-container flex gap-4 items-center">
        <div className="flex flex-col w-full ">
          <h1 className="font-bold text-2xl text-gray-900">
            Welcome to <span>ADM</span> Admission
          </h1>
          <h5 className="text-lg font-semibold text-primary">
            Unlock Your Future
          </h5>
          <p className="text-sm text-gray-600">
            Discover the perfect college for your academic journey. At ADM
            Admission, we are committed to connecting students with the best
            educational institutions worldwide. Whether you are pursuing
            undergraduate or graduate studies, our platform offers comprehensive
            information about colleges, admission processes, research
            opportunities, sports facilities, and much more. Take the first step
            towards a brighter future and explore your options with ADM
            Admission today!
          </p>
          <div className="mt-4">
            <Link
              to="/admission"
              className="btn btn-outline btn-primary btn-sm"
            >
              Admission Now
            </Link>
          </div>
        </div>
        <div className="w-full flex items-center justify-end text-right">
          <div className="max-w-xs duration-500">
            <Lottie animationData={heroImage} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
