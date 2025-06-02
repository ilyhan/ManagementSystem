import { ITask } from "@/common/interfaces/task";

export interface IBoardColumn {
    id: string,
    title: string,
    tasks: ITask[],
}