import { IResponsePreviewBoards } from "@/common/interfaces/board";
import { IResponseBoardTasks } from "../interfaces/task";

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function getAllBoards(): Promise<IResponsePreviewBoards> {
    const res = await fetch(`${baseUrl}/boards`);
    return res.json();
};

export async function getBoardTasks(id: number): Promise<IResponseBoardTasks> {
    const res = await fetch(`${baseUrl}/boards/${id}`);
    return res.json();
}