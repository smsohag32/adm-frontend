import useAdmissionFrom from "../../Hooks/useAdmissionFrom";

const CollegeCard = ({ item }) => {
  const { image, _id, admission_date, college_name } = item;

  const { handleAdmissionForm } = useAdmissionFrom();
  return (
    <div
      onClick={() => handleAdmissionForm(_id)}
      className="card card-side bg-base-100 cursor-pointer w-full border-primary border hover:shadow-xl"
    >
      <figure className="w-full h-44 overflow-hidden">
        <img
          className="object-cover h-44 w-full overflow-hidden"
          src={image}
          alt="college"
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">{college_name}</h2>
        <span className="mt-4">Admission Date:</span>
        <p className="text-primary">{admission_date}</p>
        <div className="card-actions justify-end mt-auto">
          <button className="btn btn-primary btn-xs">Admission now</button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
