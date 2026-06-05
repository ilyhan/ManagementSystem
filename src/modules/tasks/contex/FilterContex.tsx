import { EStatus } from '@/common/interfaces/task';
import { ReactNode, createContext, useState } from 'react';

interface IFilterState {
  search: string;
  status: EStatus[];
  boards: string[];
}

interface IFilterProviderProps {
  children: ReactNode;
}

interface IFilterContext {
  filters: IFilterState;
  setFilters: React.Dispatch<React.SetStateAction<IFilterState>>;
}

export const FilterContext = createContext<IFilterContext | undefined>(undefined);

const FilterProvider = ({ children }: IFilterProviderProps) => {
  const [filters, setFilters] = useState<IFilterState>({
    search: '',
    status: [],
    boards: [],
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;
