
export type Space = {
    id: number;
    name: string;
    description?: string;
}

export type ChapterTreeNode = {
    id: number;
    name: string;
    isFolder: boolean;
    children?: ChapterTreeNode[];
}

export type SpaceWithTree = Space & {
    chapters: ChapterTreeNode[];
}

export type Chapter = {
    id: number;
    space_id: number;
    parent_id: number | null;
    name: string;
    content: string;
    position: number;
    isFolder?: boolean;
}

export type CreateSpaceDto = {
    name: string;
    description?: string;
}

export type UpdateSpaceDto = {
    name: string;
    description: string;
}

export type CreateChapterDto = {
    space_id: number;
    parent_id?: number;
    name: string;
    content?: string;
    position?: number;
}

export type UpdateChapterDto = {
    name?: string;
    content?: string;
    parent_id?: number;
    position?: number;
}
