import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { IPreviewTask } from "@/common/interfaces/task";
import { getTasks } from "@/modules/tasks/services/getTasks";

const useGetTasks = (): UseQueryResult<IPreviewTask[]> => {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: getTasks,
        select: (response) => response.data,
        retry: 0,
        staleTime: 1000 * 60 * 10,
    });
}

export default useGetTasks;