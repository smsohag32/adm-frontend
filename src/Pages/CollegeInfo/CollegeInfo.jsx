import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import Spinner from "../../components/Spinner/Spinner";
import useAdmissionFrom from "../../Hooks/useAdmissionFrom";

const CollegeInfo = () => {
  const { id } = useParams();
  const { handleAdmissionForm } = useAdmissionFrom();
  const [loading, setLoading] = useState(false);
  const [college, setCollege] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://adm-backend.vercel.app/colleges/${id}`)
      .then((data) => {
        setLoading(false);
        setCollege(data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="bg-gray-50">
      <PageTitle currentPageTitle={college?.college_name}></PageTitle>
      <div className="flex adm-container my-12 gap-4 flex-col md:flex-row items-center">
        <div className="w-full">
          <figure>
            <img src={college?.image} alt="" />
          </figure>
        </div>
        <div className="w-full">
          <h3 className="simple-text">{college?.college_name}</h3>
          <p className="bg-white px-4 py-4 shadow-sm text-sm my-2">
            <span className="text-primary">Admission process: </span>
            {college?.admission_process?.detailed_process}
          </p>
          <p className="bg-white px-4 py-4 shadow-sm text-sm my-2">
            <span className="text-primary">Event: </span>
            {college?.event_details}
          </p>
          <ul className="simple-text">
            <span className="text-primary">History</span>
            {college?.research_history?.map((rh, index) => (
              <li key={index} className="">
                {index + 1}. {rh}
              </li>
            ))}
          </ul>
          <p className="bg-white px-4 py-4 shadow-sm text-sm my-2">
            <span className="text-primary">Sports category: </span>
            {college?.sports_category}
          </p>
          <button
            className="btn btn-primary btn-sm btn-outline"
            onClick={() => handleAdmissionForm(college?._id)}
          >
            Admission now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeInfo;
