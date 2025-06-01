import Modal from "@/common/ui/modal/Modal";
import TaskForm from "@/common/components/taskForm/TaskForm";
import { ITaskFormData, IUpdateTaskFormData } from "@/common/interfaces/form";
import "@/common/components/taskModal/style.scss";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useUpdateTask from "@/common/hooks/useUpdateTask";
import { IResponseTask } from "@/common/interfaces/task";

interface IUpdateModalProps {
    taskId: number;
    open: boolean;
    onClose: () => void;
}

const UpdateModal = ({ taskId, open, onClose }: IUpdateModalProps) => {
    const { mutate, isSuccess } = useUpdateTask(taskId);

    const queryClient = useQueryClient();
    const allTasks = queryClient.getQueryData(['tasks']);
    const task = (allTasks as IResponseTask).data.find(task => task.id === taskId);

    if(!task) {
        onClose();
    }

    useEffect(() => {
        if (isSuccess) {
            onClose();
        }
    }, [isSuccess]);

    const initialForm: ITaskFormData = {
        title: task?.title || '',
        description: task?.description || '',
        boardId: task?.boardId || null,
        priority: task?.priority || null,
        status: task?.status || null,
        assigneeId: task?.assignee.id || null,
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

            <TaskForm
                onSubmit={handleCreate}
                initial={initialForm}
                mode="update"
            />
        </Modal>
    )
};

export default UpdateModal;