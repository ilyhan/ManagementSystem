import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { IUpdateTaskFormData } from "@/common/interfaces/form";
import { updateTask } from "@/common/services/tasks";

const useUpdateTask = (id: number): UseMutationResult<void, Error, IUpdateTaskFormData> => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (formdata) => updateTask(formdata, id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['board-tasks'],
            });
            queryClient.removeQueries({
                queryKey: ['task', `${id}`],
            });
        },
    });
}

export default useUpdateTask;