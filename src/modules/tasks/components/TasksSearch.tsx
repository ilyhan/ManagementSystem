import Input from "@/common/ui/input/Input";
import { useFilters } from "@/modules/tasks/hooks/useFilters";
import { ChangeEvent } from "react";

const TasksSearch = () => {
    const { setFilters, filters } = useFilters();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilters(prev => ({
            ...prev,
            search: e.target.value,
        }))
    };

    return (
        <>
            <Input
                value={filters.search}
                onChange={handleChange}
                placeholder="Поиск"
            />
        </>
    )
};

export default TasksSearch;