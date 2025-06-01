import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { getUsers } from "@/common/services/team";
import { IUser } from "@/common/interfaces/team";

const useGetUsers = (): UseQueryResult<IUser[]> => {
    return useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        select: (response) => response.data,
        retry: 0,
        staleTime: 1000 * 60 * 10,
    });
}

export default useGetUsers;