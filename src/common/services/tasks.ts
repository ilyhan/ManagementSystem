import { ITaskFormData } from "@/common/interfaces/form";

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function createTask(data: ITaskFormData) {
    const res = await fetch(`${baseUrl}/tasks/create`, {
        method: "POST",
        body: JSON.stringify(data),
    });

    return res.json();
};