import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/common/hooks/useToasts';
import { deleteChapter } from '@/common/services/documentation';
import { defaultSuccess } from '@/common/toasts/messages/defaultMessages';

type DeleteChapterParams = {
    id: number;
    spaceId: number;
};

const useDeleteChapter = (): UseMutationResult<boolean, Error, DeleteChapterParams> => {
    const toasts = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id }: DeleteChapterParams) => deleteChapter(id),
        onSuccess: (_data, variables) => {
            toasts.success(defaultSuccess);

            queryClient.invalidateQueries({
                queryKey: ['space', variables.spaceId],
            });
            queryClient.removeQueries({
                queryKey: ['chapter', variables.id],
            });
        },
        onError: () => {
            toasts.error();
        },
    });
};

export default useDeleteChapter;
