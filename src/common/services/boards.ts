import { IResponsePreviewBoards } from "@/common/interfaces/board";

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function getAllBoards(): Promise<IResponsePreviewBoards> {
    const res = await fetch(`${baseUrl}/boards`);
    return res.json();
};