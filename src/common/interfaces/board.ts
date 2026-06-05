import { IAssignee } from './team';

export interface IBoardReq {
  name: string;
  name_id: string;
  description: string;
}

export interface IPreviewBoard {
  id: number;
  name: string;
  description: string;
  name_id?: string;
}

export interface IBoardUsers {
  boardId: number;
  users: IAssignee[];
}
