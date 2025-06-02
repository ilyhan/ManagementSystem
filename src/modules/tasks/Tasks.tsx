import useGetTasks from "@/common/hooks/useGetTasks";
import PreviewTask from "@/modules/tasks/components/previewTask/PreviewTask";
import "@/modules/tasks/style.scss";
import FilterDropdown from "./components/filterDropdown/FilterDropdown";
import Input from "@/common/ui/input/Input";

const Tasks = () => {
    const { data } = useGetTasks();

    return data && data.length
        ? <section className="tasks">

            <div className="tasks__filter">
                <Input placeholder="Поиск"/>
                <FilterDropdown />
            </div>

            <ul className="tasks__list">
                {data.map((task) => (
                    <li key={task.id}>
                        <PreviewTask
                            {...task}
                        />
                    </li>
                ))}
            </ul>
        </section>
        : <p>Задач нет</p>
}

export default Tasks;