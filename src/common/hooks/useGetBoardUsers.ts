import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getBoardUsers } from '@/common/services/team';
import { IAssignee } from '@/common/interfaces/team';

const useGetBoardUsers = (board_id: number): UseQueryResult<IAssignee[]> => {
  return useQuery({
    queryKey: [`users-${board_id}`],
    queryFn: () => getBoardUsers(board_id),
    retry: 0,
    staleTime: 1000 * 60 * 10,
  });
};

export default useGetBoardUsers;
