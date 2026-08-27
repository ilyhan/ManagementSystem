import {
    Chapter,
    CreateChapterDto,
    CreateSpaceDto,
    Space,
    SpaceWithTree,
    UpdateChapterDto,
    UpdateSpaceDto,
} from "../interfaces/documentation";

const baseUrl = import.meta.env.VITE_URL;

export async function getAllSpaces(): Promise<Space[]> {
    const res = await fetch(`${baseUrl}/documentation`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    return res.json();
}

export async function getSpace(id: number): Promise<SpaceWithTree> {
    const res = await fetch(`${baseUrl}/space/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    return res.json();
}

export async function getChapter(id: number): Promise<Chapter> {
    const res = await fetch(`${baseUrl}/chapter/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    return res.json();
}

export async function createSpace(data: CreateSpaceDto): Promise<Space> {
    const res = await fetch(`${baseUrl}/space/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
    });

    return res.json();
}

export async function createChapter(data: CreateChapterDto): Promise<Chapter> {
    const res = await fetch(`${baseUrl}/chapter/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
    });

    return res.json();
}

export async function updateSpace(id: number, data: UpdateSpaceDto): Promise<Space> {
    const res = await fetch(`${baseUrl}/space/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
    });

    return res.json();
}

export async function updateChapter(id: number, data: UpdateChapterDto): Promise<Chapter> {
    const res = await fetch(`${baseUrl}/chapter/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
    });

    return res.json();
}

export async function deleteSpace(id: number): Promise<boolean> {
    const res = await fetch(`${baseUrl}/space/delete/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    return res.json();
}

export async function deleteChapter(id: number): Promise<boolean> {
    const res = await fetch(`${baseUrl}/chapter/delete/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    return res.json();
}
