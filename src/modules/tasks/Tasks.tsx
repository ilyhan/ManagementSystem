import useGetTasks from "@/common/hooks/useGetTasks";
import Accordion from "@/common/ui/accordion/Accordion";
import PreviewTask from "@/modules/tasks/components/previewTask/PreviewTask";
import "@/modules/tasks/style.scss";

const Tasks = () => {
    const { data } = useGetTasks();

    return data && data.length
        ? <section className="tasks">
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