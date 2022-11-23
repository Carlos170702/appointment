import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";

export const useCitaClient = () => {
  const { state, getCitasPendingClient } = useContext(AuthContext);
  const { citasClientPending } = state;
  const [activeNew, setActiveNew] = useState(false);

  const handleNewCita = () => {
    setActiveNew(!activeNew);
  };

  useEffect(() => {
    (async () => {
      await getCitasPendingClient();
    })();
  }, []);

  return {
    //variables
    state,
    activeNew,
    citasClientPending,
    //metodos
    handleNewCita,
  };
};
