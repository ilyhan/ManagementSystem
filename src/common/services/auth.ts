import { IUserLogin, IUserReq, IUserResponse } from "../interfaces/auth";

const baseUrl = import.meta.env.VITE_URL;

export async function registration(data: IUserReq): Promise<IUserReq> {
    const res = await fetch(`${baseUrl}/auth/registration`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if(!res.ok) {
        throw new Error('error');
    }

    return res.json();
}

export async function login(data: IUserLogin): Promise<IUserResponse> {
    const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if(!res.ok) {
        throw new Error('error');
    }

    return res.json();
}