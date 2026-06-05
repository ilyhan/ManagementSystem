import useGetAllBoards from '@/common/hooks/useGetAllBoards';
import { useToast } from '@/common/hooks/useToasts';
import { IPreviewBoard } from '@/common/interfaces/board';
import { serverError } from '@/common/toasts/messages/serverMessage';
import Header from '@/modules/board/components/header/Header';
import TasksTable from '@/modules/board/components/tasksTable/TasksTable';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Board = () => {
  const { id } = useParams();
  const { data, isSuccess, isError } = useGetAllBoards();
  const [board, setBoards] = useState<IPreviewBoard>();

  const toasts = useToast();

  useEffect(() => {
    if (isError) {
      toasts.error(serverError);
    }
  }, [isError]);

  useEffect(() => {
    if (data && isSuccess) {
      setBoards(data.find((board) => board.id === Number(id)));
    }
  }, [data, isSuccess]);

  return (
    <section>
      <Header
        title={board?.name ?? ''}
        description={board?.description ?? ''}
        name_id={board?.name_id}
        boardId={Number(id)}
      />
      <TasksTable id={Number(id)} />
    </section>
  );
};

export default Board;
