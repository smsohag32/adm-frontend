import useAuth from "../../Hooks/useAuth";
import useMyCollege from "../../Hooks/useMyCollege";
import PageTitle from "../../components/PageTitle/PageTitle";
import Spinner from "../../components/Spinner/Spinner";

const MyCollege = () => {
  const { myCollege, cLoading } = useMyCollege();
  const { loading } = useAuth();

  if (cLoading || loading) {
    return <Spinner />;
  }

  const { college, studentInfo } = myCollege;
  const { college_name, admission_date } = college;

  return (
    <div className=" min-h-screen">
      <PageTitle currentPageTitle="My College" />
      <div className="adm-container py-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <h1 className="font-semibold text-xl mb-4">College Details</h1>
            <div>
              <div className="simple-text">
                <span>Collage Name:</span>
                <p className="simple-text">{college_name}</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="font-semibold text-xl mb-4">My Submitted Details</h1>
            <div className="flex flex-col gap-2">
              <p className="simple-text">{studentInfo?.candidate_name}</p>
              <p className="simple-text">{studentInfo?.candidate_email}</p>
              <p className="simple-text">{studentInfo?.phone_number}</p>
              <p className="simple-text">{studentInfo?.address}</p>
              <p className="simple-text">{studentInfo?.subject}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollege;
