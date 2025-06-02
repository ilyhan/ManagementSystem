import "@/modules/board/components/tasksTable/style.scss";
import Column from "@/modules/board/components/column/Column";
import { EStatus } from "@/common/interfaces/task";
import useGetBoardTasks from "@/common/hooks/useGetBoardTasks";
import { memo, useEffect, useState } from "react";
import { IBoardColumn } from "@/modules/board/interfaces/board";

interface ITasksTableProps {
    id: number;
}

const TasksTable = memo(({ id }: ITasksTableProps) => {
    const [columns, setColumns] = useState<IBoardColumn[]>([]);
    const { data, isSuccess } = useGetBoardTasks(id);

    useEffect(() => {
        if (data && isSuccess) {
            const initialColumns = [
                {
                    id: 'todo',
                    title: 'Выполнить',
                    tasks: data.filter(task => task.status === EStatus.BACLOG)
                },
                {
                    id: 'in-progress',
                    title: 'В работе',
                    tasks: data.filter(task => task.status === EStatus.INPROGRESS)
                },
                {
                    id: 'done',
                    title: 'Выполнено',
                    tasks: data.filter(task => task.status === EStatus.DONE)
                }
            ];
            setColumns(initialColumns);
        }
    }, [data, isSuccess]);

    return (
        <div className="tasks-table">
            {columns.map((clm) => (
                <Column
                    key={clm.id}
                    title={clm.title}
                    tasks={clm.tasks}
                />
            ))}
        </div>
    )
})

export default TasksTable;