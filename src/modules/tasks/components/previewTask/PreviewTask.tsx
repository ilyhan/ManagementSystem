import UpdateModal from "@/common/components/taskModal/UpdateModal";
import "@/modules/tasks/components/previewTask/style.scss";
import { useState } from "react";

interface IPreviewTaskProps {
    id: number;
    title: string;
    boardName?: string;
    board_id: number;
}

const PreviewTask = ({ id, title, boardName, board_id }: IPreviewTaskProps) => {
    const [open, setOpen] = useState(false);
    console.log(id);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <article className="preview-task">
            <div className="preview-task__content">
                <p className="preview-task__title">
                    {title}
                </p>

                <p className="preview-task__board">
                    {boardName}
                </p>
            </div>

            <button className="preview-task__button" onClick={handleOpen}>
                Подробнее
            </button>

            {open &&
                <UpdateModal
                    open={open}
                    onClose={handleClose}
                    taskId={id}
                    boardId={board_id}
                />
            }
        </article>
    )
};

export default PreviewTask;