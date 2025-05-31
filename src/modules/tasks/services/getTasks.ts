import { IResponseTask } from "@/modules/tasks/interfaces/task";

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function getTasks(): Promise<IResponseTask> {
    const res = await fetch(`${baseUrl}/tasks`);
    return res.json();
}