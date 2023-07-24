import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./review.css";
import useReviews from "../../../Hooks/useReviews";
import Spinner from "../../../components/Spinner/Spinner";

const Reviews = () => {
  const { reviewsData, rLoading } = useReviews();

  console.log(reviewsData);
  return (
    <div className="min-h-[90vh]">
      <div className="adm-container">
        <SectionTitle title="What to say students" />
        {rLoading && <Spinner />}
        <div className="review">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper mt-10"
          >
            {reviewsData?.length > 0 ? (
              reviewsData.map((review) => (
                <SwiperSlide key={review?._id}>
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32">
                      <img
                        className="object-cover rounded-full"
                        src={review?.student_image}
                        alt={review.student_name}
                      />
                    </div>
                    <p className="text-xl font-semibold">
                      {review?.student_name}
                    </p>
                    <p className="text-lg text-primary mt-2">
                      {review?.college_name}
                    </p>
                    <p className="max-w-xl px-6 md:px-2">{review?.review}</p>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <p className="text-primary text-xl">No Review Found</p>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
