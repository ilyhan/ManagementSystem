import { ITask } from "@/common/interfaces/task";
import "@/modules/board/components/column/style.scss";
import BoardTask from "@/modules/board/components/task/BoardTask";

interface IBoardColumnProps {
    title: string;
    tasks: ITask[];
}

const Column = ({ title, tasks }: IBoardColumnProps) => {
    return (
        <div className="board-column">
            <h2 className="board-column__title">
                {title}
            </h2>

            <div className="board-column__divider"></div>

            <div className="board-column__container">
                {tasks.map((task: ITask) => (
                    <BoardTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        preority={task.priority}
                    />
                ))}
            </div>
        </div>
    )
};

export default Column;