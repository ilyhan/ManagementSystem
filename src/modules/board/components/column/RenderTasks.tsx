import BoardTask from "@/modules/board/components/task/BoardTask";
import "@/modules/board/components/column/style.scss";
import { ITask } from "@/common/interfaces/task";

interface IRenderTasksProps {
    tasks: ITask[];
}

const RenderTasks = ({ tasks }: IRenderTasksProps) => {
    return (
        <>
            <div className="board-column__divider"></div>

            <div className="board-column__container">
                {tasks.map((task: ITask) => (
                    <BoardTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        preority={task.priority}
                        assignee={task.assignee}
                    />
                ))}
            </div>
        </>
    )
};

export default RenderTasks;