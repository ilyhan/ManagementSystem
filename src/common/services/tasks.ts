import { ITaskFormData, IUpdateTaskFormData } from "@/common/interfaces/form";
import { ITask } from "../interfaces/task";

const baseUrl = import.meta.env.VITE_URL;

export async function createTask(data: ITaskFormData) {
    const res = await fetch(`${baseUrl}/tasks/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return res.json();
};

export async function updateTask(data: IUpdateTaskFormData, id: number) {
    const res = await fetch(`${baseUrl}/tasks/update/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return res.json();
}

export async function getTasks(): Promise<ITask[]> {
    const res = await fetch(`${baseUrl}/tasks`);
    return res.json();
}

export async function getTaskById(id: number): Promise<ITask> {
    const res = await fetch(`${baseUrl}/tasks/${id}`);
    return res.json();
}