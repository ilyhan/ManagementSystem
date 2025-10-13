import { EPriority, EStatus } from "./task";

export interface IOption {
    value: string | number;
    title: string;
}

export interface ITaskFormData {
    title: string;
    description: string;
    board_id: number | null;
    priority: EPriority | null;
    status: EStatus | null;
    assignee_id: number | null;
};

export interface IUpdateTaskFormData {
    title: string;
    description: string;
    priority: EPriority;
    status: EStatus;
    assignee_id: number;
};