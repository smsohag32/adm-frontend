import useBestColleges from "../../../Hooks/useBestColleges";
import SimpleCard from "../../../components/Card/SimpleCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Opportunity = () => {
  const { bestColleges, bLoading } = useBestColleges();
  return (
    <div className="min-h-screen bg-white">
      <div className="adm-container py-12">
        <SectionTitle title="Explore Opportunities"></SectionTitle>
        {bLoading && <p>Loading</p>}
        <div className="grid grid-cols-1 my-10 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {bestColleges?.length > 0 &&
            bestColleges.map((college) => (
              <SimpleCard key={college._id} item={college}></SimpleCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
