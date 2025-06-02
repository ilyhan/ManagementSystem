import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { ITaskFormData } from "@/common/interfaces/form";
import { createTask } from "@/common/services/tasks";

const useCreateTask = (): UseMutationResult<void, Error, ITaskFormData> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (formdata: ITaskFormData) => createTask(formdata),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['board-tasks'],
            });
        },
    });
}

export default useCreateTask;