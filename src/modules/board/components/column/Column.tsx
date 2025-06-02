import "@/modules/board/components/column/style.scss";
import Task from "@/modules/board/components/task/Task";

interface IBoardColumnProps {
    title: string;
    tasks: any;
}

const Column = ({ title, tasks }: IBoardColumnProps) => {
    return (
        <div className="board-column">
            <h2 className="board-column__title">
                {title}
            </h2>

            <div className="board-column__divider"></div>

            <div className="board-column__container">
                {tasks.map((task: any) => (
                    <Task
                        key={task.id}
                        title={task.title}
                        preority={task.priority}
                    />
                ))}
            </div>
        </div>
    )
};

export default Column;