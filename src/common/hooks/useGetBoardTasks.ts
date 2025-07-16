import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { ITask } from "@/common/interfaces/task";
import { getBoardTasks } from "@/common/services/boards";

const useGetBoardTasks = (id: number): UseQueryResult<ITask[]> => {
    return useQuery({
        queryKey: ['board-tasks', `${id}`],
        queryFn: () => getBoardTasks(id),
        retry: 0,
        staleTime: 1000 * 60 * 10,
    });
}

export default useGetBoardTasks;