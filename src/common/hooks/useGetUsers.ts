import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getUsers } from '@/common/services/team';
import { IAssignee } from '@/common/interfaces/team';

const useGetUsers = (): UseQueryResult<IAssignee[]> => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    retry: 0,
    staleTime: 1000 * 60 * 10,
  });
};

export default useGetUsers;
