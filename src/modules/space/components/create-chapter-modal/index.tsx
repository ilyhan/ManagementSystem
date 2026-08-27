import { FormEvent, useEffect, useState } from 'react';
import Modal from '@/common/ui/modal/Modal';
import Input from '@/common/ui/input/Input';
import Button from '@/common/ui/button/Button';
import useCreateChapter from '@/common/hooks/api/documentation/useCreateChapter';
import '@/modules/space/components/create-chapter-modal/style.scss';

interface ICreateChapterModalProps {
    isOpen: boolean;
    onClose: () => void;
    spaceId: number;
    parentId?: number;
}

export const CreateChapterModal = ({ isOpen, onClose, spaceId, parentId }: ICreateChapterModalProps) => {
    const [name, setName] = useState('');

    const { mutate: createChapter } = useCreateChapter();

    useEffect(() => {
        if (isOpen) {
            setName('');
        }
    }, [isOpen]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        createChapter({ space_id: spaceId, parent_id: parentId, name });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form className="create-chapter-modal__form" onSubmit={handleSubmit}>
                <Input
                    label="Название раздела"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Button type="submit">Создать</Button>
            </form>
        </Modal>
    );
};
