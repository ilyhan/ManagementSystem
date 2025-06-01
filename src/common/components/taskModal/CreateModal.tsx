import Modal from "@/common/ui/modal/Modal";
import TaskForm from "@/common/components/taskForm/TaskForm";
import { ITaskFormData } from "@/common/interfaces/form";
import "@/common/components/taskModal/style.scss";
import useCreateTask from "@/common/hooks/useCreateTask";
import { useEffect } from "react";

interface ICreateModalProps {
    open: boolean;
    onClose: () => void;
}

const CreateModal = ({ open, onClose }: ICreateModalProps) => {
    const { mutate, isSuccess } = useCreateTask();

    useEffect(()=>{
        if(isSuccess) {
            onClose();
        }
    }, [isSuccess]);

    const initialForm: ITaskFormData = {
        title: '',
        description: '',
        boardId: null,
        priority: null,
        status: null,
        assigneeId: null,
    };

    const handleCreate = async (data: ITaskFormData) => {
        data.boardId = Number(data.boardId);
        data.assigneeId = Number(data.assigneeId);
        mutate(data);
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