
export interface IPreviewBoard {
    id: number;
    name: string;
    description: string;
    taskCount: number;
};

export interface IResponsePreviewBoards {
    data: IPreviewBoard[];
}