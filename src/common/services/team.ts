import { IAssignee } from "@/common/interfaces/team";

const baseUrl = import.meta.env.VITE_URL;

export async function getUsers(): Promise<IAssignee[]> {
    const res = await fetch(`${baseUrl}/users`);
    return res.json();
};