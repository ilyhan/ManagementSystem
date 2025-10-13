import UpdateModal from "@/common/components/taskModal/UpdateModal";
import UserInfo from "@/common/components/userInfo/UserInfo";
import { EPriority } from "@/common/interfaces/task";
import { IAssignee } from "@/common/interfaces/team";
import "@/modules/board/components/task/style.scss";
import { useState } from "react";

interface IBoardTaslProps {
    id: number;
    title: string;
    preority: EPriority;
    assignee: IAssignee;
}

const BoardTask = ({ id, title, preority, assignee }: IBoardTaslProps) => {
    const [open, setOpen] = useState(false);
    console.log(id);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <article
                onClick={handleOpen}
                className={`board-task board-task_${preority.toLowerCase()}`}
            >
                <UserInfo
                    name={assignee.fullName}
                />

                <p className="board-task__title">
                    {title}
                </p>
            </article>

            {open &&
                <UpdateModal
                    taskId={id}
                    open={open}
                    onClose={handleClose}
                />
            }
        </>
    )
};

export default BoardTask;