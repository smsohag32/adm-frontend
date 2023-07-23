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
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper mt-10"
          >
            {reviewsData?.length > 0 ? (
              reviewsData.map((review) => (
                <SwiperSlide key={review?._id}></SwiperSlide>
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
