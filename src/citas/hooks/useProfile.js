import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export const useProfile = () => {
    const { getUserByEmail } = useContext(AuthContext)  

  return {
    getUserByEmail
  };
};
