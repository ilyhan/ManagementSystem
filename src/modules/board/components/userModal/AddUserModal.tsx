import useGetBoardUsers from '@/common/hooks/useGetBoardUsers';
import useGetUsers from '@/common/hooks/useGetUsers';
import { IAssigneeSelected } from '@/common/interfaces/team';
import Checkbox from '@/common/ui/checkbox/Checkbox';
import Modal from '@/common/ui/modal/Modal';
import { FormEvent, useEffect, useState } from 'react';
import { selectedUsers } from '../lib';
import useAddBoardUsers from '@/common/hooks/useAddBoardUsers';
import '@/modules/board/components/userModal/style.scss';
import Button from '@/common/ui/button/Button';

interface IAddUserModalProps {
  open: boolean;
  onClose: () => void;
  boardId: number;
}

const AddUserModal = ({ open, onClose, boardId }: IAddUserModalProps) => {
  const [users, setUsers] = useState<IAssigneeSelected[]>([]);

  const { data: allUsers } = useGetUsers();
  const { data: boardUsers } = useGetBoardUsers(boardId);

  const { mutate } = useAddBoardUsers();

  useEffect(() => {
    if (allUsers && boardUsers) {
      setUsers(selectedUsers(allUsers, boardUsers));
    }
  }, [allUsers, boardUsers]);

  const handleUserToggle = (userId: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, select: !user.select } : user)),
    );
  };

  const getSelectedUsers = () => {
    return users.filter((user) => user.select);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const selected = getSelectedUsers();
    mutate({ boardId, users: selected });
    onClose();
  };

  return (
    <Modal isOpen={open} onClose={onClose}>
      <form className="add-user-modal__form" onSubmit={handleSubmit}>
        <ul className="add-user-modal__list">
          {users.map((user) => (
            <li key={user.id}>
              <Checkbox
                label={user.fullName}
                name={String(user.id)}
                checked={user.select || false}
                onChecked={() => handleUserToggle(user.id)}
              />
            </li>
          ))}
        </ul>
        <Button type="submit">Добавить</Button>
      </form>
    </Modal>
  );
};

export default AddUserModal;
