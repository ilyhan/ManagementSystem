import useGetBoardUsers from '@/common/hooks/useGetBoardUsers';
import '@/modules/board/components/boardUsers/style.scss';

interface IBoardUserProps {
  boardId: number;
}

const BoardUsers = ({ boardId }: IBoardUserProps) => {
  const { data } = useGetBoardUsers(boardId);

  return (
    data && (
      <ul className="board-user__list">
        {data.map((user) => (
          <li>{user.fullName}</li>
        ))}
      </ul>
    )
  );
};

export default BoardUsers;
