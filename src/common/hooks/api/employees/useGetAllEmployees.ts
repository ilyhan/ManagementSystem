import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getEmployees } from '@/common/services/users';
import { IEmployeeShort } from '@/common/interfaces/user';

const useGetAllEmployees = (): UseQueryResult<IEmployeeShort[]> => {
  return useQuery({
    queryKey: ['all-employees'],
    queryFn: getEmployees,
    retry: 0,
    staleTime: 1000 * 60 * 100,
  });
};

export default useGetAllEmployees;
