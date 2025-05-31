import Modal from "@/common/ui/modal/Modal";
import TaskForm from "@/common/components/taskForm/TaskForm";
import { ITaskFormData } from "@/common/interfaces/form";
import "@/common/components/taskModal/style.scss";
    
interface ICreateModalProps {
    open: boolean;
    onClose: () => void;
}

const CreateModal = ({ open, onClose }: ICreateModalProps) => {
    const initialForm: ITaskFormData = {
        title: '',
        description: '',
        boardId: null,
        priority: null,
        status: null,
        assigneeId: null,
    };

    return (
        <Modal isOpen={open} onClose={onClose}>
            <h2 className="task-modal__title">
                Создание задачи
            </h2>

            <TaskForm initial={initialForm} />
        </Modal>
    )
};

export default CreateModal;