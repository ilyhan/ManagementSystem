import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { IUserReq } from '../interfaces/auth';
import { registration } from '../services/auth';

export const useRegistration = (): UseMutationResult<IUserReq, Error, IUserReq> => {
  return useMutation({
    mutationFn: (data: IUserReq) => registration(data),
  });
};
