import Modal from "@/common/ui/modal/Modal";
import TaskForm from "@/common/components/taskForm/TaskForm";
import { ITaskFormData } from "@/common/interfaces/form";
import "@/common/components/taskModal/style.scss";
import useCreateTask from "@/common/hooks/useCreateTask";
import { useEffect } from "react";
import { getFormData } from "@/common/utils/getFormData";

interface ICreateModalProps {
    open: boolean;
    onClose: () => void;
    board_id: number;
    defaultData?: Partial<ITaskFormData>;
}

const CreateModal = ({ open, onClose, board_id, defaultData }: ICreateModalProps) => {
    const { mutate, isSuccess } = useCreateTask();

    useEffect(() => {
        if (isSuccess) {
            onClose();
        }
    }, [isSuccess]);

    const initialForm = getFormData(defaultData);

    const handleCreate = async (data: ITaskFormData) => {
        mutate({
            ...data,
            board_id: board_id,
            assignee_id: Number(data.assignee_id),
        });
    };

    return (
        <Modal isOpen={open} onClose={onClose}>
            <h2 className="task-modal__title">
                Создание задачи
            </h2>

            <TaskForm
                onSubmit={handleCreate}
                initial={initialForm}
            />
        </Modal>
    )
};

export default CreateModal;