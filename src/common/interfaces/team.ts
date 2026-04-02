
export interface IAssignee {
    id: number;
    fullName: string;
    email?: string;
}

export interface IAssigneeSelected extends IAssignee {
    select?: boolean;
}