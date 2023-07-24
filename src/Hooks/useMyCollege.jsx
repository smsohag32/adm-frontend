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
        `https://adm-backend.vercel.app/admission/${user?.email}`
      );
      return res.data;
    },
  });

  return { myCollege, cLoading, refetch };
};

export default useMyCollege;
