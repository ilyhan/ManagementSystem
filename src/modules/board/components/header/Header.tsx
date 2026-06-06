import '@/modules/board/components/header/style.scss';
import { useState } from 'react';
import AddUserModal from '@/modules/board/components/userModal/AddUserModal';
import { useAuth } from '@/store/authProvider';
import BoardUsers from '../boardUsers/BoardUsers';

interface IBoardHeaderProps {
  title: string;
  description: string;
  boardId: number;
  name_id?: string;
  selectedUserId: number | null;
  onUserSelect: (userId: number | null) => void;
}

const Header = ({
  title,
  description,
  boardId,
  name_id,
  selectedUserId,
  onUserSelect,
}: IBoardHeaderProps) => {
  const [open, setOpen] = useState(false);
  const { auth } = useAuth();

  return (
    <header className="board-header">
      <h1 className="board-header__title">
        {title} {name_id ? `(${name_id})` : ''}
      </h1>

      <p className="board-header__description">{description}</p>

      <div className="board-header__bottom">
        <BoardUsers boardId={boardId} selectedUserId={selectedUserId} onUserSelect={onUserSelect} />

        {auth.user?.role == 'teamlead' && (
          <button className="board-header__add-user-btn" onClick={() => setOpen(true)}>
            Добавить пользователя
          </button>
        )}
      </div>

      {open && <AddUserModal open={open} onClose={() => setOpen(false)} boardId={boardId} />}
    </header>
  );
};

export default Header;
