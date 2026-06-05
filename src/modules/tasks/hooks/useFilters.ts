import { useContext } from 'react';
import { FilterContext } from '@/modules/tasks/contex/FilterContex';

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('Error context');
  }

  return context;
};
