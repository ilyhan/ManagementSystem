import Modal from '@/common/ui/modal/Modal';
import '@/common/components/taskModal/style.scss';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import useCreateBoard from '@/common/hooks/useCreateBoard';
import { IBoardReq } from '@/common/interfaces/board';
import Input from '@/common/ui/input/Input';
import Textarea from '@/common/ui/textarea/Textarea';
import Button from '@/common/ui/button/Button';

interface ICreateModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateBoardModal = ({ open, onClose }: ICreateModalProps) => {
  const { mutate, isSuccess } = useCreateBoard();
  const [formData, setFormData] = useState<IBoardReq>({
    name: '',
    name_id: '',
    description: '',
  });

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal isOpen={open} onClose={onClose}>
      <h2 className="task-modal__title">Создание доски</h2>

      <form className="task-modal__form" onSubmit={handleCreate}>
        <Input
          name="name"
          onChange={handleChange}
          value={formData.name}
          label="Название"
          required
        />

        <Input
          name="name_id"
          onChange={handleChange}
          value={formData.name_id}
          label="Краткое наимемнование"
          required
        />

        <Textarea
          name="description"
          onChange={handleChange}
          value={formData.description}
          label="Описание"
          required
        />

        <Button type="submit" className="task-modal__button">
          Создать
        </Button>
      </form>
    </Modal>
  );
};

export default CreateBoardModal;
