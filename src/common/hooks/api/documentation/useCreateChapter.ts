import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/common/hooks/useToasts';
import { Chapter, CreateChapterDto } from '@/common/interfaces/documentation';
import { createChapter } from '@/common/services/documentation';
import { defaultSuccess } from '@/common/toasts/messages/defaultMessages';

const useCreateChapter = (): UseMutationResult<Chapter, Error, CreateChapterDto> => {
    const toasts = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: CreateChapterDto) => createChapter(data),
        onSuccess: (_data, variables) => {
            toasts.success(defaultSuccess);

            queryClient.invalidateQueries({
                queryKey: ['space', variables.space_id],
            });
        },
        onError: () => {
            toasts.error();
        },
    });
};

export default useCreateChapter;
