import Modal from "@/common/ui/modal/Modal";
import TaskForm from "@/common/components/taskForm/TaskForm";
import { ITaskFormData, IUpdateTaskFormData } from "@/common/interfaces/form";
import "@/common/components/taskModal/style.scss";
import { useEffect } from "react";
import useUpdateTask from "@/common/hooks/useUpdateTask";
import useGetTaskById from "@/common/hooks/useGetTaskById";
import { useToast } from "@/common/hooks/useToasts";
import { serverError } from "@/common/toasts/messages/serverMessage";
import { Link } from "react-router-dom";
import Loader from "@/common/ui/loader/Loader";

interface IUpdateModalProps {
    taskId: number;
    boardId?: number;
    open: boolean;
    onClose: () => void;
}

const UpdateModal = ({ taskId, boardId, open, onClose }: IUpdateModalProps) => {
    const { mutate, isSuccess } = useUpdateTask(taskId);
    const { data, isError, isLoading } = useGetTaskById(taskId);

    const toasts = useToast();

    useEffect(() => {
        if (isError) {
            toasts.error(serverError);
            onClose();
        }
    }, [isError]);

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

            {isLoading && <Loader style={{minHeight: '100px'}}/>}
            {data &&
                <TaskForm
                    onSubmit={handleCreate}
                    initial={initialForm}
                    mode="update"
                />
            }

            {boardId &&
                <Link to={`/board/${boardId}`} className="task-modal__link">
                    К доске
                </Link>
            }
        </Modal>
    )
};

export default UpdateModal;