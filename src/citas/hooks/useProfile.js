import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export const useProfile = () => {
  const { state, getUserByEmail, logout } = useContext(AuthContext)
  const [warning, setWarning] = useState(false);
  const [update, setUpdae] = useState(false);
  const navigate = useNavigate();

  const { user } = state;
  useEffect(() => {
    getUserByEmail();
  }, [])

  const warningView = () => {
    setWarning(!warning)
  }

  const UpdateUserView = () => {
    setUpdae(!update);
  }

  const DeleteAccount = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    fetch(`https://citasapi.onrender.com/users/deleteUser/${user.email}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() => {
        localStorage.removeItem('user');
        navigate('/', { replace: true });
        logout();
      })
      .catch(error => console.log('error', error));
  }

  return {
    update,
    user,
    getUserByEmail,
    warning,
    warningView,
    DeleteAccount,
    UpdateUserView
  };
};
