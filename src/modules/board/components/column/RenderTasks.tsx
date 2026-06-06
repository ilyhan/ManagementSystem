import BoardTask from '@/modules/board/components/task/BoardTask';
import '@/modules/board/components/column/style.scss';
import { EStatus, ITask } from '@/common/interfaces/task';
import TaskModal from '@/common/components/taskModal/CreateModal';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
interface IRenderTasksProps {
  tasks: ITask[];
  status: EStatus;
}

const RenderTasks = ({ tasks, status }: IRenderTasksProps) => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            currentNameId={task.current_name}
          />
        ))}
      </div>

      <div className="board-column__controller">
        <button className="board-column__button" onClick={handleOpen}>
          + Добавить задачу
        </button>
      </div>

      {open && (
        <TaskModal
          open={open}
          onClose={handleClose}
          board_id={Number(id)}
          defaultData={{ status: status }}
        />
      )}
    </>
  );
};

export default RenderTasks;
