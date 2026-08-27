import { FormEvent, useEffect, useState } from 'react';
import Modal from '@/common/ui/modal/Modal';
import Input from '@/common/ui/input/Input';
import Textarea from '@/common/ui/textarea/Textarea';
import Button from '@/common/ui/button/Button';
import useCreateSpace from '@/common/hooks/api/documentation/useCreateSpace';
import useUpdateSpace from '@/common/hooks/api/documentation/useUpdateSpace';
import { Space } from '@/common/interfaces/documentation';
import '@/modules/documentation/components/space-modal/style.scss';

interface ISpaceModalProps {
    isOpen: boolean;
    onClose: () => void;
    space?: Space;
}

export const SpaceModal = ({ isOpen, onClose, space }: ISpaceModalProps) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const { mutate: createSpace } = useCreateSpace();
    const { mutate: updateSpace } = useUpdateSpace();

    useEffect(() => {
        if (isOpen) {
            setName(space?.name ?? '');
            setDescription(space?.description ?? '');
        }
    }, [isOpen, space]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (space) {
            updateSpace({ id: space.id, data: { name, description } });
        } else {
            createSpace({ name, description });
        }

        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form className="space-modal__form" onSubmit={handleSubmit}>
                <Input
                    label="Название"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Textarea
                    label="Описание"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button type="submit">{space ? 'Сохранить' : 'Создать'}</Button>
            </form>
        </Modal>
    );
};
