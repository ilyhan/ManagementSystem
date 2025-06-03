import { useDebounce } from "@/common/hooks/useDebounce";
import Input from "@/common/ui/input/Input";
import { useFilters } from "@/modules/tasks/hooks/useFilters";
import { ChangeEvent, useState } from "react";

const TasksSearch = () => {
    const { setFilters } = useFilters();
    const [searchValue, setSearchValue] = useState('');

    const updateSearchValue = (val: string) => {
        setFilters(prev => ({
            ...prev,
            search: val,
        }))
    };

    const handleChangeDebounce = useDebounce(updateSearchValue, 300);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        handleChangeDebounce(e.target.value.trim());
    };

    return (
        <div style={{maxWidth: '200px'}}>
            <Input
                value={searchValue}
                onChange={handleChange}
                placeholder="Поиск"
            />
        </div>
    )
};

export default TasksSearch;