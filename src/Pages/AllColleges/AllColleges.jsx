import useColleges from "../../Hooks/useColleges";
import SimpleCard from "../../components/Card/SimpleCard";
import PageTitle from "../../components/PageTitle/PageTitle";

const AllColleges = () => {
  const { colleges, cLoading } = useColleges();
  return (
    <div className="min-h-screen bg-white">
      <PageTitle currentPageTitle="All Colleges"></PageTitle>
      <div className="adm-container py-12">
        {cLoading && <p>Loading</p>}
        <div className="grid grid-cols-1 my-10 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {colleges?.length > 0 &&
            colleges.map((college) => (
              <SimpleCard key={college._id} item={college}></SimpleCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllColleges;
