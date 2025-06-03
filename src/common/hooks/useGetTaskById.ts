import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { ITask } from "@/common/interfaces/task";
import { getTaskById } from "@/common/services/tasks";

const useGetTaskById = (id: number): UseQueryResult<ITask> => {
    return useQuery({
        queryKey: ['task', `${id}`],
        queryFn: () => getTaskById(id),
        select: (response) => response.data,
        retry: 0,
        staleTime: 0, 
    });
}

export default useGetTaskById;