import { IAssignee } from '@/common/interfaces/team';

const baseUrl = import.meta.env.VITE_URL;

export async function getBoardUsers(board_id: number): Promise<IAssignee[]> {
  const res = await fetch(`${baseUrl}/board/users/${board_id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return res.json();
}

export async function getUsers(): Promise<IAssignee[]> {
  const res = await fetch(`${baseUrl}/users`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return res.json();
}
