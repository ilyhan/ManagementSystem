import Modal from "@/common/ui/modal/Modal";
import TaskForm from "@/common/components/taskForm/TaskForm";
import { ITaskFormData, IUpdateTaskFormData } from "@/common/interfaces/form";
import "@/common/components/taskModal/style.scss";
import { useEffect } from "react";
import useUpdateTask from "@/common/hooks/useUpdateTask";
import useGetTaskById from "@/common/hooks/useGetTaskById";

interface IUpdateModalProps {
    taskId: number;
    open: boolean;
    onClose: () => void;
}

const UpdateModal = ({ taskId, open, onClose }: IUpdateModalProps) => {
    const { mutate, isSuccess } = useUpdateTask(taskId);
    const { data } = useGetTaskById(taskId);

    useEffect(() => {
        if (isSuccess) {
            onClose();
        }
    }, [isSuccess]);

    const initialForm: ITaskFormData = {
        title: data?.title || '',
        description: data?.description || '',
        boardId: null,
        priority: data?.priority || null,
        status: data?.status || null,
        assigneeId: data?.assignee.id || null,
    };

    const handleCreate = async (data: ITaskFormData) => {
        const { boardId, ...updateData } = data; //удаляем boardId который не используется в редактировании 

        mutate({
            ...updateData,
            assigneeId: Number(updateData.assigneeId),
        } as IUpdateTaskFormData);
    };

    return (
        <Modal isOpen={open} onClose={onClose}>
            <h2 className="task-modal__title">
                Редактирование задачи
            </h2>

            {data &&
                <TaskForm
                    onSubmit={handleCreate}
                    initial={initialForm}
                    mode="update"
                />
            }
        </Modal>
    )
};

export default UpdateModal;