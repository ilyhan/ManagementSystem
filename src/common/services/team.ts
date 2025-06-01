import { IResponseUser } from "@/common/interfaces/team";

const baseUrl = import.meta.env.VITE_BASE_URL;

export async function getUsers(): Promise<IResponseUser> {
    const res = await fetch(`${baseUrl}/users`);
    return res.json();
};