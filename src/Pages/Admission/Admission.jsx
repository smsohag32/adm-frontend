import useColleges from "../../Hooks/useColleges";
import CollegeCard from "../../components/Card/CollegeCard";
import PageTitle from "../../components/PageTitle/PageTitle";
import Spinner from "../../components/Spinner/Spinner";

const Admission = () => {
  const { colleges, cLoading } = useColleges();

  if (cLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <PageTitle currentPageTitle="Admission on going" />
      <div className="adm-container grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
        {colleges.length > 0 &&
          colleges.map((college) => (
            <CollegeCard key={college?._id} item={college} />
          ))}
      </div>
    </div>
  );
};

export default Admission;
