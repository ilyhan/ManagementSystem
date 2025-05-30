import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { IPreviewBoard } from "@/modules/allBoards/interfaces/board";
import { getAllBoards } from "@/modules/allBoards/services/allBoards";

const useGetAllBoards = (): UseQueryResult<IPreviewBoard[]> => {
    return useQuery({
        queryKey: ['all-boards'],
        queryFn: getAllBoards,
        select: (response) => response.data,
        retry: 0,
        staleTime: 1000 * 60 * 10,
    });
}

export default useGetAllBoards;