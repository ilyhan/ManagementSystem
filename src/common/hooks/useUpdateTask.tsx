import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { IUpdateTaskFormData } from "@/common/interfaces/form";
import { updateTask } from "@/common/services/tasks";
import { useToast } from "@/common/hooks/useToasts";
import { updateSuccess } from "@/common/toasts/messages/serverMessage";

const useUpdateTask = (id: number): UseMutationResult<void, Error, IUpdateTaskFormData> => {
    const queryClient = useQueryClient();
    const toasts = useToast();

    return useMutation({
        mutationFn: (formdata) => updateTask(formdata, id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['board-tasks'],
            });
            
            queryClient.removeQueries({
                queryKey: ['task', `${id}`],
            });

            toasts.success(updateSuccess);
        },
        onError: () => {
            toasts.error();
        }
    });
}

export default useUpdateTask;