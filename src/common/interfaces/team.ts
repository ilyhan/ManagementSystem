
export interface IAssignee {
    id: number;
    fullName: string;
    email: string;
    avatarUrl: string;
}

export interface IUser extends IAssignee{
    description: string;
    tasksCount: number;
    teamId: number;
    teamName: number;
}

export interface IResponseUser {
    data: IUser[];
}