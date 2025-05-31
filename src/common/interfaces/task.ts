import { IAssignee } from "@/common/interfaces/team";

export type TPriority = 'Low' | 'Medium' | 'High';
export type TStatus = 'Backlog' | 'InProgress' | 'Done';

export interface ITask {
    id: number;
    boardName: string;
    description: string;
    priority: TPriority;
    status: TStatus;
    title: string;
    assignee: IAssignee;
}

export interface IPreviewTask extends ITask{
    boardId: number;
}
