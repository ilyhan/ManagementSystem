import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Space } from '@/common/interfaces/documentation';
import { getAllSpaces } from '@/common/services/documentation';

const useGetAllSpaces = (): UseQueryResult<Space[]> => {
    return useQuery({
        queryKey: ['spaces'],
        queryFn: getAllSpaces,
        retry: 0,
        staleTime: 1000 * 60 * 10,
    });
};

export default useGetAllSpaces;
