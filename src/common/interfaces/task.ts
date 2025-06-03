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
    boardName: string;
    description: string;
    priority: EPriority;
    status: EStatus;
    title: string;
    assignee: IAssignee;
}

export interface IPreviewTask extends ITask {
    boardId: number;
}

export interface IResponseTask {
    data: IPreviewTask[];
}

export interface IResponseBoardTasks {
    data: ITask[];
}

export interface IResponseTaskById {
    data: ITask;
}