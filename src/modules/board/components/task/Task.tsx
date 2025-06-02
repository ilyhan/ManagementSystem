import { EPriority } from "@/common/interfaces/task";
import "@/modules/board/components/task/style.scss";

interface IBoardTaslProps {
    title: string;
    preority: EPriority;
}

const Task = ({ title, preority }: IBoardTaslProps) => {
    return (
        <article className={`board-task board-task_${preority.toLowerCase()}`}>
            <p className="board-task__title">
                {title}
            </p>
        </article>
    )
};

export default Task;