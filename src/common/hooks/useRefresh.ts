import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { refresh } from "../services/auth";
import { IUser } from "../interfaces/auth";

const useRefresh = (): UseQueryResult<IUser> => {
    return useQuery({
        queryKey: ['refresh'],
        queryFn: refresh,
        retry: 0,
    });
}

export default useRefresh;