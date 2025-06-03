import "@/modules/tasks/style.scss";
import FilterDropdown from "@/modules/tasks/components/filterDropdown/FilterDropdown";
import FilterProvider from "@/modules/tasks/contex/FilterContex";
import TasksList from "@/modules/tasks/components/tasksList/TasksList";
import TasksSearch from "@/modules/tasks/components/TasksSearch";

const Tasks = () => {
    return (
        <FilterProvider>
            <div className="tasks__filter">
                <TasksSearch />
                <FilterDropdown />
            </div>
            <TasksList />
        </FilterProvider>
    )
}

export default Tasks;