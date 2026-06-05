import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { IPreviewBoard } from '@/common/interfaces/board';
import { getAllBoards } from '@/common/services/boards';

const useGetAllBoards = (): UseQueryResult<IPreviewBoard[]> => {
  return useQuery({
    queryKey: ['all-boards'],
    queryFn: getAllBoards,
    retry: 0,
    staleTime: 1000 * 60 * 10,
  });
};

export default useGetAllBoards;
