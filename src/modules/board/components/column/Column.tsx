import { EStatus, ITask } from '@/common/interfaces/task';
import '@/modules/board/components/column/style.scss';
import RenderTasks from '@/modules/board/components/column/RenderTasks';

interface IBoardColumnProps {
  title: string;
  tasks: ITask[];
  status: EStatus;
}

const Column = ({ title, tasks, status }: IBoardColumnProps) => {
  return (
    <div className="board-column">
      <h2 className="board-column__title">{title}</h2>

      <RenderTasks tasks={tasks} status={status} />
    </div>
  );
};

export default Column;
