import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { ITaskFormData } from "@/common/interfaces/form";
import { createTask } from "@/common/services/tasks";
import { useToast } from "@/common/hooks/useToasts";
import { createSuccess } from "@/common/toasts/messages/serverMessage";

const useCreateTask = (): UseMutationResult<void, Error, ITaskFormData> => {
    const queryClient = useQueryClient();
    const toasts = useToast();

    return useMutation({
        mutationFn: (formdata: ITaskFormData) => createTask(formdata),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['board-tasks'],
            });

            toasts.success(createSuccess);
        },
        onError: ()=>{
            toasts.error();
        }
    });
}

export default useCreateTask;