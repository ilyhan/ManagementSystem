import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { useToast } from "@/common/hooks/useToasts";
import { ICreateTrack } from "@/common/interfaces/tracking";
import { createTrack } from "@/common/services/tracking";
import { defaultSuccess } from "@/common/toasts/messages/defaultMessages";

const useCreateTrack = (): UseMutationResult<boolean, Error, ICreateTrack> => {
    const toasts = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: ICreateTrack) => createTrack(data),
        onSuccess: () => {
            toasts.success(defaultSuccess);

            queryClient.invalidateQueries({
                queryKey: [`tracking`]
            });
        },
        onError: () => {
            toasts.error();
        }
    });
}

export default useCreateTrack;