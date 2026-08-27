import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/common/hooks/useToasts';
import { CreateSpaceDto, Space } from '@/common/interfaces/documentation';
import { createSpace } from '@/common/services/documentation';
import { defaultSuccess } from '@/common/toasts/messages/defaultMessages';

const useCreateSpace = (): UseMutationResult<Space, Error, CreateSpaceDto> => {
    const toasts = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: CreateSpaceDto) => createSpace(data),
        onSuccess: () => {
            toasts.success(defaultSuccess);

            queryClient.invalidateQueries({
                queryKey: ['spaces'],
            });
        },
        onError: () => {
            toasts.error();
        },
    });
};

export default useCreateSpace;
