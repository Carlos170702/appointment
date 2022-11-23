import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./authContext"
import { authReducer } from "./authReducer"

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return {
        logged: !!user,
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {}, init)

    const login = () => {
        dispatch({
            type: types.login,
            payload: true
        })
    }

    const logout = () => {
        dispatch({
            type: types.logout,
            payload: false
        })
    }

    const getCitasPending = async () => {
        const response = await fetch("https://citasapi.onrender.com/users/list_appointment/1/", {
            method: "GET",
        });
        const data = await response.json()

        dispatch({
            type: types.citasPending,
            payload: data
        })
    }

    const confirmAppointment = async (id) => {
        const formdata = new FormData();
        formdata.append("statustAppointment", "true");
        const requestOptions = {
            method: "PUT",
            body: formdata,
            redirect: "follow",
        };
        const response = await fetch(
            `https://citasapi.onrender.com/users/finish_appointment/${id}/`,
            requestOptions
        );
        const data = await response.json();
        data.Status && dispatch({
            type: types.deleteAppoint,
            payload: id
        })
    }

    const deleteAppointment = async (id) => {
        const formdata = new FormData();
        formdata.append("email", JSON.parse(localStorage.getItem('user')).email);
        const requestOptions = {
            method: "DELETE",
            body: formdata,
        };

        const response = await fetch(
            `https://citasapi.onrender.com/appointment/appointmentDelete/${id}`,
            requestOptions
        );
        const data = await response.json();
        data.Status && dispatch({
            type: types.confirmAppoint,
            payload: id
        })
    }

    const getCitasPendingClient = async () => {
        dispatch({
            type: types.citasClientPending,
            payload: {
                isLoading: true,
                isError: {},
                data: [],
            }
        })
        const headersList = {
            Accept: "*/*",
            "Content-Type": "application/json",
        };

        const bodyContent = JSON.stringify({
            email: JSON.parse(localStorage.getItem("user")).email,
        });

        try {
            const response = await fetch(
                "https://citasapi.onrender.com/appointment/appointmentUser/0",
                {
                    method: "POST",
                    body: bodyContent,
                    headers: headersList,
                }
            );
            const data = await response.json();
            data.Status ?
                setTimeout(() => {
                    dispatch({
                        type: types.citasClientPending,
                        payload: {
                            isLoading: false,
                            isError: {},
                            data: data.Appointment,
                        }
                    })
                }, 1000)
                :
                setTimeout(() => {
                    dispatch({
                        type: types.citasClientPending,
                        payload: {
                            isLoading: false,
                            isError: {},
                            data: [],
                        }
                    })
                }, 1000)
        } catch (e) {
            setTimeout(() => {
                dispatch({
                    type: types.citasClientPending,
                    payload: {
                        isLoading: false,
                        isError: {},
                        data: [],
                    }
                })
            }, 1000)
        }
    };

    const getUserByEmail = async () => {
        dispatch({
            type: types.getUserByEmail,
            payload: {
                isLoading: true,
                data: [],
                hasHerror: []
            },
        })
        var formdata = new FormData();
        formdata.append("email", JSON.parse(localStorage.getItem('user'))?.email);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        try {
            const response = await fetch('https://citasapi.onrender.com/users/getUserByEmail/', requestOptions);
            const data = await response.json();
                dispatch({
                    type: types.getUserByEmail,
                    payload: {
                        isLoading: false,
                        data : data?.Data,
                        hasHerror: []
                    },
                })

        } catch (e) {
            console.log(e)
            setTimeout(() => {
                dispatch({
                    type: types.getUserByEmail,
                    payload: {
                        isLoading: false,
                        data: [],
                        hasHerror: e
                    },
                })
            }, 1000);
        }

    }

    return (
        <AuthContext.Provider value={{
            state,
            login,
            logout,
            getCitasPending,
            confirmAppointment,
            deleteAppointment,
            getCitasPendingClient,
            getUserByEmail
        }}>
            {children}
        </AuthContext.Provider>
    )
}
