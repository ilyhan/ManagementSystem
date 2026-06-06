import useGetBoardUsers from '@/common/hooks/useGetBoardUsers';
import '@/modules/board/components/boardUsers/style.scss';
import UserInfo from '@/common/components/userInfo/UserInfo';

interface IBoardUserProps {
  boardId: number;
  selectedUserId: number | null;
  onUserSelect: (userId: number | null) => void;
}

const BoardUsers = ({ boardId, selectedUserId, onUserSelect }: IBoardUserProps) => {
  const { data } = useGetBoardUsers(boardId);

  const handleClick = (userId: number) => {
    onUserSelect(selectedUserId === userId ? null : userId);
  };

  return (
    data && (
      <ul className="board-user__list">
        {data.map((user) => (
          <li
            className={`board-user__item ${selectedUserId === user.id ? 'board-user__item_active' : ''}`}
            key={user.id}
            onClick={() => handleClick(user.id)}
          >
            <UserInfo name={user.fullName} />
          </li>
        ))}
      </ul>
    )
  );
};

export default BoardUsers;
