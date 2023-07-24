import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useUser = () => {
  const { user, loading } = useAuth();
  const {
    data: userData = [],
    isLoading: uLoading,
    refetch,
  } = useQuery({
    queryKey: ["userData", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://adm-backend.vercel.app/users/${user?.email}`
      );
      return res.data;
    },
  });

  return { userData, uLoading, refetch };
};

export default useUser;
