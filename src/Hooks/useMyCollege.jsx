import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useMyCollege = () => {
  const { user, loading } = useAuth();
  const {
    data: myCollege = [],
    isLoading: cLoading,
    refetch,
  } = useQuery({
    queryKey: ["myCollege"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/admission/${user?.email}`
      );
      return res.data;
    },
  });

  return { myCollege, cLoading, refetch };
};

export default useMyCollege;
