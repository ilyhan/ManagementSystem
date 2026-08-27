import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/common/hooks/useToasts';
import { Space, UpdateSpaceDto } from '@/common/interfaces/documentation';
import { updateSpace } from '@/common/services/documentation';
import { defaultSuccess } from '@/common/toasts/messages/defaultMessages';

type UpdateSpaceParams = {
    id: number;
    data: UpdateSpaceDto;
};

const useUpdateSpace = (): UseMutationResult<Space, Error, UpdateSpaceParams> => {
    const toasts = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateSpaceParams) => updateSpace(id, data),
        onSuccess: (_data, variables) => {
            toasts.success(defaultSuccess);

            queryClient.invalidateQueries({
                queryKey: ['spaces'],
            });
            queryClient.invalidateQueries({
                queryKey: ['space', variables.id],
            });
        },
        onError: () => {
            toasts.error();
        },
    });
};

export default useUpdateSpace;
