import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import useMyCollege from "../../Hooks/useMyCollege";
import PageTitle from "../../components/PageTitle/PageTitle";
import Spinner from "../../components/Spinner/Spinner";
import Swal from "sweetalert2";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const MyCollege = () => {
  const { myCollege, cLoading } = useMyCollege();
  const { loading, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (cLoading || loading) {
    return <Spinner />;
  }

  const { college, studentInfo } = myCollege;
  const {
    college_name,
    admission_date,
    event_details,
    rating,
    research_history,
    sports_category,
  } = college;

  const handleReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;

    const reviewInfo = {
      student_name: user?.displayName,
      student_image: user?.photoURL,
      review: review,
      college_name: college_name,
    };

    axios
      .post(`http://localhost:5000/reviews`, reviewInfo)
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Admission Success!",
          showConfirmButton: false,
          timer: 2500,
        });
        e.target.reset();
        closeModal();
      })
      .catch((err) => {});
  };
  return (
    <div className=" min-h-screen">
      <PageTitle currentPageTitle="My College" />
      <div className="adm-container py-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <h1 className="font-semibold text-xl mb-4">College Details</h1>
            <div>
              <div className="simple-text">
                <span className="text-primary">Collage Name:</span>
                <p className="simple-text">{college_name}</p>
              </div>
              <div className="simple-text">
                <span className="text-primary">Admission Date:</span>
                <p className="simple-text">{admission_date}</p>
              </div>
              <div className="simple-text">
                <span className="text-primary">Event:</span>
                <p className="simple-text">{event_details}</p>
              </div>
              <div className="simple-text">
                <span className="text-primary">Sports:</span>
                <p className="simple-text">{sports_category}</p>
              </div>
              <div className="simple-text">
                <span className="text-primary">Research History:</span>
                {research_history.map((re, index) => (
                  <p key={index} className="">
                    {re}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="font-semibold text-xl mb-4">My Submitted Details</h1>
            <div className="flex flex-col h-auto gap-2">
              <p className="simple-text">{studentInfo?.candidate_name}</p>
              <p className="simple-text">{studentInfo?.candidate_email}</p>
              <p className="simple-text">{studentInfo?.phone_number}</p>
              <p className="simple-text">{studentInfo?.address}</p>
              <p className="simple-text">{studentInfo?.subject}</p>
              <div className="mt-auto">
                <button
                  className="btn btn-outline btn-md btn-primary"
                  onClick={() => setIsOpen(true)}
                >
                  Review
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Review
                    </Dialog.Title>
                    <form
                      onSubmit={handleReview}
                      className="flex mt-2 flex-col"
                    >
                      <textarea
                        className="textarea textarea-primary"
                        name="review"
                        id=""
                        cols="30"
                        rows="5"
                        placeholder="type your review"
                        required
                      ></textarea>
                      <button type="submit" className="btn mt-4 btn-primary">
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-outline  mt-2 btn-xs"
                        onClick={closeModal}
                      >
                        X
                      </button>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default MyCollege;
