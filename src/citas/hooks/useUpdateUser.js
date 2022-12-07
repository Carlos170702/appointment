import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const useUpdateUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { formState, onInputChange } = useForm({
        username: '',
        lastname: '',
        phone: ''
    });



    const UpdateDataUser = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "username": formState?.username,
            "lastname": formState?.lastname,
            "phone": formState?.phone
        });

        let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const email = JSON.parse(localStorage.getItem('user'))?.email;

        fetch(`https://citasapi.onrender.com/users/updateUser/${email}`, requestOptions)
            .then(response => response.json())
            .then(result => {

                result.Status && setTimeout(() => {
                    result.Status && navigate('/citas', { replace: true });
                    setIsLoading(false)
                }, 2000);
            })
            .catch(error => {
                setTimeout(false);
            });
    }

    return {
        isLoading,
        formState,
        onInputChange,
        UpdateDataUser
    }
}
