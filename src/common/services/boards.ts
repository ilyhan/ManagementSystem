import { IBoardReq, IPreviewBoard } from '../interfaces/board';
import { ITask } from '../interfaces/task';
import { IAssignee } from '../interfaces/team';

const baseUrl = import.meta.env.VITE_URL;

export async function getAllBoards(): Promise<IPreviewBoard[]> {
  const res = await fetch(`${baseUrl}/boards`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return res.json();
}

export async function getBoardTasks(id: number): Promise<ITask[]> {
  const res = await fetch(`${baseUrl}/board/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return res.json();
}

export async function createBoard(data: IBoardReq) {
  const res = await fetch(`${baseUrl}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Ошибка создания доски');
  }

  return res.json();
}

export async function addBoardUsers(boardId: number, users: IAssignee[]) {
  const res = await fetch(`${baseUrl}/board/add/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ boardId, users }),
  });

  if (!res.ok) {
    throw new Error('Ошибка добавления');
  }

  return res.json();
}
