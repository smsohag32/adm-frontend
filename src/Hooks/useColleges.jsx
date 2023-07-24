import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useColleges = () => {
  const {
    data: colleges = [],
    isLoading: cLoading,
    refetch,
  } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await axios.get(`https://adm-backend.vercel.app/colleges`);
      return res.data;
    },
  });

  return { colleges, cLoading, refetch };
};

export default useColleges;
