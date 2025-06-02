import { ITaskFormData, IUpdateTaskFormData } from "@/common/interfaces/form";
import { IResponseTask, IResponseTaskById } from "@/common/interfaces/task";

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function createTask(data: ITaskFormData) {
    const res = await fetch(`${baseUrl}/tasks/create`, {
        method: "POST",
        body: JSON.stringify(data),
    });

    return res.json();
};

export async function updateTask(data: IUpdateTaskFormData, id: number) {
    const res = await fetch(`${baseUrl}/tasks/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
    });

    return res.json();
}

export async function getTasks(): Promise<IResponseTask> {
    const res = await fetch(`${baseUrl}/tasks`);
    return res.json();
}

export async function getTaskById(id: number): Promise<IResponseTaskById> {
    const res = await fetch(`${baseUrl}/tasks/${id}`);
    return res.json();
}