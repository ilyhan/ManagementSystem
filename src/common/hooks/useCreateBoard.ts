import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query"
import { useToast } from "@/common/hooks/useToasts";
import { createSuccess } from "@/common/toasts/messages/serverMessage";
import { IBoardReq } from "../interfaces/board";
import { createBoard } from "../services/boards";

const useCreateBoard = (): UseMutationResult<void, Error, IBoardReq> => {
    const toasts = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: IBoardReq) => createBoard(data),
        onSuccess: () => {
            toasts.success(createSuccess);

            queryClient.invalidateQueries({
                queryKey: ['all-boards']
            });
        },
        onError: () => {
            toasts.error();
        }
    });
}

export default useCreateBoard;