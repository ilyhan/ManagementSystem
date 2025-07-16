import { IBoardReq, IPreviewBoard } from "../interfaces/board";
import { ITask } from "../interfaces/task";

const baseUrl = import.meta.env.VITE_URL;

export async function getAllBoards(): Promise<IPreviewBoard[]> {
    const res = await fetch(`${baseUrl}/boards`);
    return res.json();
};

export async function getBoardTasks(id: number): Promise<ITask[]> {
    const res = await fetch(`${baseUrl}/board/tasks/${id}`);
    return res.json();
}

export async function createBoard(data: IBoardReq) {
    const res = await fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if(!res.ok) {
        throw new Error('Ошибка создания доски');
    }

    return res.json();
}