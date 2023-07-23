import { useContext } from "react";
import { AdmissionContext } from "../context/AdmissionProvider";

const useAdmissionFrom = () => {
  const route = useContext(AdmissionContext);
  return route;
};

export default useAdmissionFrom;
