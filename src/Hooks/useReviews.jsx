import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useReviews = () => {
  const {
    data: reviewsData = [],
    isLoading: rLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviewsData"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/reviews`);
      return res.data;
    },
  });

  return { reviewsData, rLoading, refetch };
};

export default useReviews;
