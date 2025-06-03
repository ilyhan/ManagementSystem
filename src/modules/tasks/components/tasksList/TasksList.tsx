import "@/modules/tasks/style.scss";
import { useFilters } from "@/modules/tasks/hooks/useFilters";
import useGetTasks from "@/common/hooks/useGetTasks";
import { useEffect, useMemo } from "react";
import PreviewTask from "@/modules/tasks/components/previewTask/PreviewTask";
import { useToast } from "@/common/hooks/useToasts";
import { serverError } from "@/common/toasts/messages/serverMessage";
import Loader from "@/common/ui/loader/Loader";

const TasksList = () => {
    const { filters } = useFilters();
    const { data, isError, isLoading } = useGetTasks();

    const toasts = useToast();

    useEffect(() => {
        if (isError) {
            toasts.error(serverError);
        }
    }, [isError]);

    const filterData = useMemo(() => {
        if (!data) return [];

        return data.filter(task => {
            const searchName =
                filters.search.length < 3 ||
                task.title.toLocaleLowerCase().includes(filters.search.toLowerCase());

            const statusMatch =
                filters.status.length === 0 || filters.status.includes(task.status);

            const boardMatch =
                filters.boards.length === 0 || filters.boards.includes(task.boardName);

            return statusMatch && boardMatch && searchName;
        });
    }, [data, filters]);

    return isLoading
        ? <Loader />
        : filterData && filterData.length
            ? <section className="tasks">
                <ul className="tasks__list">
                    {filterData.map((task) => (
                        <li key={task.id}>
                            <PreviewTask
                                {...task}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            : <p>Задач нет</p>
};

export default TasksList;