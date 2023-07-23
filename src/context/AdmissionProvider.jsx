import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AdmissionContext = createContext();
const AdmissionProvider = ({ children }) => {
  const navigate = useNavigate();

  const handleAdmissionForm = (id) => {
    navigate(`/admission/form/${id}`);
  };

  return (
    <AdmissionContext.Provider value={{ handleAdmissionForm }}>
      {children}
    </AdmissionContext.Provider>
  );
};

export default AdmissionProvider;
