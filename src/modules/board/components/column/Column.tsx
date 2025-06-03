import { ITask } from "@/common/interfaces/task";
import "@/modules/board/components/column/style.scss";
import RenderTasks from "@/modules/board/components/column/RenderTasks";

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

            <RenderTasks tasks={tasks}/>
        </div>
    )
};

export default Column;