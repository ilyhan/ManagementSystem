import { UseMutationResult, useMutation } from "@tanstack/react-query"
import { IUpdateTaskFormData } from "@/common/interfaces/form";
import { updateTask } from "@/common/services/tasks";

const useUpdateTask = (id: number): UseMutationResult<void, Error, IUpdateTaskFormData> => {
    return useMutation({
        mutationFn: (formdata) => updateTask(formdata, id),
    });
}

export default useUpdateTask;