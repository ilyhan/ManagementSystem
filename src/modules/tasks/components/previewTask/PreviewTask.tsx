import UpdateModal from '@/common/components/taskModal/UpdateModal';
import UserInfo from '@/common/components/userInfo/UserInfo';
import { EPriority, EStatus } from '@/common/interfaces/task';
import { IAssignee } from '@/common/interfaces/team';
import '@/modules/tasks/components/previewTask/style.scss';
import { useState } from 'react';

interface IPreviewTaskProps {
  id: number;
  title: string;
  description?: string;
  boardName?: string;
  board_id: number;
  priority: EPriority;
  status: EStatus;
  assignee: IAssignee;
  current_name: string;
}

const statusLabels: Record<EStatus, string> = {
  [EStatus.BACKLOG]: 'Выполнить',
  [EStatus.INPROGRESS]: 'В работе',
  [EStatus.DONE]: 'Выполнено',
};

const PreviewTask = ({
  id,
  title,
  description,
  boardName,
  board_id,
  priority,
  status,
  assignee,
  current_name,
}: IPreviewTaskProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className={`preview-task preview-task_${priority.toLowerCase()}`}>
        <div className="preview-task__body">
          <div className="preview-task__header">
            <span className="preview-task__id">{current_name}</span>
            <span className={`preview-task__status preview-task__status_${status.toLowerCase()}`}>
              {statusLabels[status] || status}
            </span>
          </div>

          <h3 className="preview-task__title">{title}</h3>

          {description && <p className="preview-task__description">{description}</p>}

          <div className="preview-task__meta">
            <UserInfo name={assignee.fullName} />
            <span className="preview-task__board-name">{boardName}</span>
          </div>
        </div>

        <button className="preview-task__button" onClick={() => setOpen(true)}>
          Подробнее
        </button>
      </article>

      {open && <UpdateModal open={open} onClose={() => setOpen(false)} taskId={id} boardId={board_id} />}
    </>
  );
};

export default PreviewTask;
