import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import uploadImage from "../../utils/uploadImage";
import Swal from "sweetalert2";

const AdmissionFrom = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [college, setCollege] = useState([]);
  const { user, loading: uLoading } = useAuth();
  const navigate = useNavigate();
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAdmission = (studentData) => {
    setLoading(true);
    const imageData = studentData.image[0];
    uploadImage(imageData)
      .then((imageInfo) => {
        const image = imageInfo?.data?.display_url;
        const newStudentData = studentData;
        // delete image data
        delete newStudentData.image;

        // add image image link
        const studentInfo = {
          ...newStudentData,
          image,
        };

        const newAdmission = {
          collegeId: id,
          college: college,
          studentInfo,
        };
        axios
          .put(
            `https://adm-backend.vercel.app/admission/${user?.email}`,
            newAdmission
          )
          .then((data) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Admission Success!",
              showConfirmButton: false,
              timer: 2500,
            });
            reset();
            navigate("/my-college");
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
          });
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://adm-backend.vercel.app/colleges/${id}`)
      .then((data) => {
        setLoading(false);
        console.log(data);
        setCollege(data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [id]);

  if (loading || uLoading) {
    return <Spinner />;
  }

  return (
    <div className=" min-h-[calc(100vh-64px)]">
      <PageTitle
        currentPageTitle={`Admission ${college?.college_name}`}
      ></PageTitle>
      <div className="adm-container my-10">
        <form onSubmit={handleSubmit(handleAdmission)}>
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="mb-2 w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                {...register("candidate_name", {
                  required: "This Field is required *",
                })}
                type="text"
                name="candidate_name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
              />
              {errors?.name && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.candidate_name?.message}</small>
                </span>
              )}
            </div>
            <div className="mb-2 w-full">
              <label
                htmlFor="image"
                className="block text-gray-700 font-semibold mb-2"
              >
                Select photo
              </label>
              <input
                {...register("image", {
                  required: "This Field is required *",
                })}
                className="w-full"
                type="file"
                name="image"
                id="image"
                accept="image/*"
              />
              {errors?.image && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.image?.message}</small>
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="mb-2 w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                {...register("candidate_email", {
                  required: "This Field is required *",
                })}
                type="email"
                value={user?.email}
                name="candidate_email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
              />
              {errors?.candidate_email && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.candidate_email?.message}</small>
                </span>
              )}
            </div>
            <div className="mb-4 w-full relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Subject
              </label>
              <input
                {...register("subject", {
                  required: "This Field is required *",
                })}
                type="text"
                name="subject"
                placeholder="Enter your subject"
                className="w-full  border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
              />
              {errors?.subject && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.subject?.message}</small>
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="mb-2 w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                {...register("phone_number", {
                  required: "This Field is required *",
                })}
                type="number"
                name="phone_number"
                placeholder="Enter your phone_number"
                className="w-full border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
              />
              {errors?.phone_number && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.phone_number?.message}</small>
                </span>
              )}
            </div>
            <div className="mb-4 w-full relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Address
              </label>
              <input
                {...register("address", {
                  required: "This Field is required *",
                })}
                type="text"
                name="address"
                placeholder="Enter your address"
                className="w-full  border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
              />
              {errors?.address && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.address?.message}</small>
                </span>
              )}
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="btn btn-md  btn-primary w-full mx-auto"
          >
            {loading ? "Wetting" : "Submit and confirm"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionFrom;
