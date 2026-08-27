import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { SpaceWithTree } from '@/common/interfaces/documentation';
import { getSpace } from '@/common/services/documentation';

const useGetSpace = (id: number): UseQueryResult<SpaceWithTree> => {
    return useQuery({
        queryKey: ['space', id],
        queryFn: () => getSpace(id),
        retry: 0,
        staleTime: 1000 * 60 * 10,
        enabled: !!id,
    });
};

export default useGetSpace;
