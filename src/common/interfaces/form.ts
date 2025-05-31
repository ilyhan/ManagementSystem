import { EPriority, EStatus } from "./task";

export interface IOption {
    value: string | number;
    title: string;
}

export interface ITaskFormData {
    title: string;
    description: string;
    boardId: number | null;
    priority: EPriority | null;
    status: EStatus | null;
    assigneeId: number | null;
};