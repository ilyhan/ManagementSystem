import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/common/hooks/useToasts';
import { Chapter, UpdateChapterDto } from '@/common/interfaces/documentation';
import { updateChapter } from '@/common/services/documentation';
import { defaultSuccess } from '@/common/toasts/messages/defaultMessages';

type UpdateChapterParams = {
    id: number;
    spaceId: number;
    data: UpdateChapterDto;
};

const useUpdateChapter = (): UseMutationResult<Chapter, Error, UpdateChapterParams> => {
    const toasts = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: UpdateChapterParams) => updateChapter(id, data),
        onSuccess: (_data, variables) => {
            toasts.success(defaultSuccess);

            queryClient.invalidateQueries({
                queryKey: ['chapter', variables.id],
            });
            queryClient.invalidateQueries({
                queryKey: ['space', variables.spaceId],
            });
        },
        onError: () => {
            toasts.error();
        },
    });
};

export default useUpdateChapter;
