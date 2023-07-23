import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useUser from "../../Hooks/useUser";
import Spinner from "../../components/Spinner/Spinner";
import uploadImage from "../../utils/uploadImage";
import userSave from "../../utils/userSave";
import { useState } from "react";
import axios from "axios";

const Account = () => {
  const { userData, uLoading, refetch } = useUser();
  const { userInfoUpdate, user } = useAuth();
  const [isUpdate, setIsUpdate] = useState(false);
  console.log(userData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handle update info
  const handleUpdate = (userInfo) => {
    const name = userInfo.name;
    const email = userInfo.email;
    const address = userInfo.address;
    const university = userInfo.university;
    const image = userInfo?.image[0];
    uploadImage(image).then((imageInfo) => {
      const photo_url = imageInfo?.data?.display_url;

      // user update
      userInfoUpdate(name, photo_url)
        .then(() => {
          const updatedInfo = {
            name,
            email,
            image: photo_url,
            address,
            university,
          };
          // user log out
          axios
            .put(`http://localhost:5000/users/${user?.email}`, updatedInfo)
            .then((data) => {
              setIsUpdate(false);
              refetch();
              reset();
            })
            .catch((err) => {
              setIsUpdate(false);
            });
        })
        .catch((err) => {
          setIsUpdate(false);
        });
    });
  };
  if (uLoading) {
    return <Spinner />;
  }
  return (
    <div className="bg-gray-50 pt-16 min-h-screen">
      <div className="adm-container py-12 flex gap-4 flex-col md:flex-row items-center">
        <div className="w-full">
          <form onSubmit={handleSubmit(handleUpdate)}>
            <div className="flex gap-6 flex-col md:flex-row">
              <div className="mb-2 w-full">
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "This Field is required *",
                  })}
                  disabled={!isUpdate}
                  defaultValue={userData?.name}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
                />
                {errors?.name && (
                  <span className="text-red-600 block text-sm">
                    <small>{errors.name?.message}</small>
                  </span>
                )}
              </div>
              {isUpdate && (
                <div className="mb-2 w-full">
                  <label
                    htmlFor="image"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Select profile photo
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
              )}
            </div>
            <div className="flex gap-6 flex-col md:flex-row">
              <div className="mb-2 w-full">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "This Field is required *",
                  })}
                  disabled={!isUpdate}
                  defaultValue={userData?.email}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
                />
                {errors?.email && (
                  <span className="text-red-600 block text-sm">
                    <small>{errors.email?.message}</small>
                  </span>
                )}
              </div>
              <div className="mb-2 w-full">
                <label className="block text-gray-700 font-semibold mb-2">
                  University Name
                </label>
                <input
                  {...register("university", {
                    required: "This Field is required *",
                  })}
                  disabled={!isUpdate}
                  defaultValue={userData?.university}
                  type="university"
                  name="university"
                  className="w-full border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
                />
                {errors?.university && (
                  <span className="text-red-600 block text-sm">
                    <small>{errors.university?.message}</small>
                  </span>
                )}
              </div>
            </div>
            <div className="mb-2 w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                Address
              </label>
              <input
                {...register("address", {
                  required: "This Field is required *",
                })}
                disabled={!isUpdate}
                defaultValue={userData?.address}
                type="address"
                name="address"
                className="w-full border border-gray-300 focus:outline-none focus:border-[#1d4cc2] px-4 py-2 "
              />
              {errors?.address && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.address?.message}</small>
                </span>
              )}
            </div>
            {isUpdate ? (
              <button
                type="submit"
                className="btn btn-md  btn-primary w-full mx-auto"
              >
                Save and Update
              </button>
            ) : (
              <span
                onClick={() => setIsUpdate(true)}
                className="btn btn-md  btn-primary w-full mx-auto"
              >
                Edit
              </span>
            )}
          </form>
        </div>
        <div className="w-full">
          <div className="w-[70%] mx-auto">
            <img
              className="object-cover h-auto w-full"
              src={userData?.image}
              alt="user"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
