import '@/modules/board/components/tasksTable/style.scss';
import Column from '@/modules/board/components/column/Column';
import { EStatus } from '@/common/interfaces/task';
import useGetBoardTasks from '@/common/hooks/useGetBoardTasks';
import { memo, useEffect, useMemo, useState } from 'react';
import { IBoardColumn } from '@/modules/board/interfaces/board';
import { useToast } from '@/common/hooks/useToasts';
import { serverError } from '@/common/toasts/messages/serverMessage';
import { useNavigate } from 'react-router-dom';
import AccordionColumn from '@/modules/board/components/column/AccordionColumn';
import { useGetWidthOfScreen } from '@/common/hooks/useGetWidthOfScreen';

interface ITasksTableProps {
  id: number;
  selectedUserId: number | null;
}

const TasksTable = memo(({ id, selectedUserId }: ITasksTableProps) => {
  const [columns, setColumns] = useState<IBoardColumn[]>([]);
  const { data, isSuccess, isError } = useGetBoardTasks(id);
  const screen = useGetWidthOfScreen();

  const navigate = useNavigate();
  const toasts = useToast();

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (selectedUserId) return data.filter((task) => task.assignee_id === selectedUserId);
    return data;
  }, [data, selectedUserId]);

  useEffect(() => {
    if (isError) {
      toasts.error(serverError);
      navigate('/boards');
    }
  }, [data, isError]);

  useEffect(() => {
    if (filteredData && isSuccess) {
      const initialColumns = [
        {
          id: 'todo',
          title: 'Выполнить',
          tasks: filteredData.filter((task) => task.status === EStatus.BACKLOG),
          status: EStatus.BACKLOG,
        },
        {
          id: 'in-progress',
          title: 'В работе',
          tasks: filteredData.filter((task) => task.status === EStatus.INPROGRESS),
          status: EStatus.INPROGRESS,
        },
        {
          id: 'done',
          title: 'Выполнено',
          tasks: filteredData.filter((task) => task.status === EStatus.DONE),
          status: EStatus.DONE,
        },
      ];
      setColumns(initialColumns);
    }
  }, [filteredData, isSuccess]);

  return (
    <div className="tasks-table">
      {columns.map((clm) =>
        screen > 650 ? <Column key={clm.id} {...clm} /> : <AccordionColumn key={clm.id} {...clm} />,
      )}
    </div>
  );
});

export default TasksTable;
