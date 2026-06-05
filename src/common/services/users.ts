import { IEmployeeShort } from '@/common/interfaces/user';

const baseUrl = import.meta.env.VITE_URL;

export async function getEmployees(): Promise<IEmployeeShort[]> {
  const res = await fetch(`${baseUrl}/employees`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return res.json();
}
