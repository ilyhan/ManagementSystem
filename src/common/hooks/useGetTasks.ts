import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { ITask } from "@/common/interfaces/task";
import { getTasks } from "@/common/services/tasks";

const useGetTasks = (): UseQueryResult<ITask[]> => {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks,
        retry: 0,
        staleTime: 1000 * 60 * 10,
    });
}

export default useGetTasks;