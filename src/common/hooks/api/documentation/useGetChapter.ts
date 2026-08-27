import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Chapter } from '@/common/interfaces/documentation';
import { getChapter } from '@/common/services/documentation';

const useGetChapter = (id: number): UseQueryResult<Chapter> => {
    return useQuery({
        queryKey: ['chapter', id],
        queryFn: () => getChapter(id),
        retry: 0,
        staleTime: 1000 * 60 * 10,
        enabled: !!id,
    });
};

export default useGetChapter;
