import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/common/hooks/useToasts';
import { createSuccess } from '@/common/toasts/messages/serverMessage';
import { IBoardUsers } from '../interfaces/board';
import { addBoardUsers } from '../services/boards';

const useAddBoardUsers = (): UseMutationResult<void, Error, IBoardUsers> => {
  const toasts = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IBoardUsers) => addBoardUsers(data.boardId, data.users),
    onSuccess: (_, data: IBoardUsers) => {
      toasts.success(createSuccess);

      queryClient.invalidateQueries({
        queryKey: [`users-${data.boardId}`],
      });
    },
    onError: () => {
      toasts.error();
    },
  });
};

export default useAddBoardUsers;
