import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBestColleges = () => {
  const {
    data: bestColleges = [],
    isLoading: bLoading,
    refetch,
  } = useQuery({
    queryKey: ["bestColleges"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/colleges/best`);
      return res.data;
    },
  });

  return { bestColleges, bLoading, refetch };
};

export default useBestColleges;
