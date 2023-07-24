import { useContext } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Spinner from "../../components/Spinner/Spinner";
import { SearchContext } from "../../context/SearchDataProvider";
import CollegeCard from "../../components/Card/CollegeCard";

const CollegeSearch = () => {
  const { loading, searchData } = useContext(SearchContext);

  console.log(searchData);
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <PageTitle currentPageTitle="Search" />
      {loading && <Spinner />}
      {searchData?.length > 0 ? (
        <div className="adm-container grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
          {searchData.map((college) => (
            <CollegeCard key={college._id} item={college} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-[40vh]">
          <h1 className="font-bold text-primary">No College Found</h1>
        </div>
      )}
    </div>
  );
};

export default CollegeSearch;
