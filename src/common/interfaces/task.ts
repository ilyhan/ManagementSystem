import { IAssignee } from "@/common/interfaces/team";

export enum EPriority {
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High',
};

export enum EStatus {
    BACLOG = 'Backlog',
    INPROGRESS = 'InProgress',
    DONE = 'Done',
}

export interface ITask {
    id: number;
    board_id: number;
    boardName?: string;
    description: string;
    priority: EPriority;
    status: EStatus;
    title: string;
    assignee: IAssignee;
}