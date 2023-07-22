import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";

const CollegeInfo = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [college, setCollege] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/colleges/${id}`)
      .then((data) => {
        setLoading(false);
        setCollege(data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [id]);

  console.log(loading, college);
  if (loading) {
    return <p>loading</p>;
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
            <span className="text-primary">Admission process</span>:{" "}
            {college?.admission_process?.detailed_process}
          </p>
          <ul className="simple-text">
            <span>History</span>
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
          <Link
            className="btn btn-primary btn-sm btn-outline"
            to={`/admission/${college?._id}`}
          >
            Admission now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeInfo;
