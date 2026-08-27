import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/common/hooks/useToasts';
import { deleteSpace } from '@/common/services/documentation';
import { defaultSuccess } from '@/common/toasts/messages/defaultMessages';

const useDeleteSpace = (): UseMutationResult<boolean, Error, number> => {
    const toasts = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteSpace(id),
        onSuccess: (_data, id) => {
            toasts.success(defaultSuccess);

            queryClient.invalidateQueries({
                queryKey: ['spaces'],
            });
            queryClient.removeQueries({
                queryKey: ['space', id],
            });
        },
        onError: () => {
            toasts.error();
        },
    });
};

export default useDeleteSpace;
