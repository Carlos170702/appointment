import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

export const useProfile = () => {
  const { state, getUserByEmail } = useContext(AuthContext)
  const { user } = state;
  useEffect(() => {
    getUserByEmail();
  }, [])

  return {
    user,
    getUserByEmail
  };
};
