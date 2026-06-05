import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { getWeekTracking } from "@/common/services/tracking";
import { IWeekTracking } from "@/common/interfaces/tracking";

const useGetTracking = (week: number, year: number): UseQueryResult<IWeekTracking[]> => {
    return useQuery({
        queryKey: ['tracking', `tracking-${week}-${year}`],
        queryFn: () => getWeekTracking(week, year),
        retry: 0,
        staleTime: 1000 * 60 * 100,
    });
}

export default useGetTracking;