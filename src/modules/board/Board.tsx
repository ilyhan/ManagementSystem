import useGetAllBoards from "@/common/hooks/useGetAllBoards";
import { IPreviewBoard } from "@/common/interfaces/board";
import Header from "@/modules/board/components/header/Header";
import TasksTable from "@/modules/board/components/tasksTable/TasksTable";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Board = () => {
    const { id } = useParams();
    const { data, isSuccess } = useGetAllBoards();
    const [board, setBoards] = useState<IPreviewBoard>();

    useEffect(() => {
        if (data && isSuccess) {
            setBoards(data.find(board => board.id === Number(id)));
        }
    }, [data, isSuccess]);

    return (
        <section>
            <Header title={board?.name ?? ''} description={board?.description ?? ''} />
            <TasksTable id={Number(id)}/>
        </section>
    )
};

export default Board;