import { Link } from "react-router-dom";

const SimpleCard = ({ item }) => {
  const { college_name, image, admission_date, _id } = item;
  return (
    <div className="card w-full h-96 glass overflow-hidden">
      <figure className="w-full hover:scale-x-90 transition-all duration-700">
        <img src={image} alt={college_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{college_name}</h2>
        <p>{admission_date}</p>
        <p>{admission_date}</p>
        <div className="card-actions justify-end">
          <Link to={`/colleges/${_id}`} className="btn btn-sm btn-primary">
            Details view
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
