import { UseMutationResult, useMutation } from "@tanstack/react-query"
import { IUserLogin, IUserResponse } from "../interfaces/auth";
import { login } from "../services/auth";
import { useAuth } from "@/store/authProvider";
import { useNavigate } from "react-router-dom";

const useLogin = (): UseMutationResult<IUserResponse, Error, IUserLogin> => {
    const { onLogin } = useAuth();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (data: IUserLogin) => login(data),
        onSuccess: (data) => {
            console.log(data);
            onLogin(data.token, data.user);
            navigate('/');
        }
    });
}

export default useLogin;