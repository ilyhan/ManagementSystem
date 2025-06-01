import { UseMutationResult, useMutation } from "@tanstack/react-query"
import { ITaskFormData } from "@/common/interfaces/form";
import { createTask } from "@/common/services/tasks";

const useCreateTask = (): UseMutationResult<void, Error, ITaskFormData> => {
    return useMutation({
        mutationFn: (formdata: ITaskFormData) => createTask(formdata),
    });
}

export default useCreateTask;