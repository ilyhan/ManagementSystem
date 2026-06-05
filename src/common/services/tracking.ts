import { ICreateTrack, IWeekTracking } from '../interfaces/tracking';

const baseUrl = import.meta.env.VITE_URL;

export async function getWeekTracking(week: number, year: number): Promise<IWeekTracking[]> {
  const res = await fetch(`${baseUrl}/tracking/track/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ week, year }),
  });

  return res.json();
}

export async function getAddTrack(week: number, year: number): Promise<IWeekTracking[]> {
  const res = await fetch(`${baseUrl}/tracking/track/me`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ week, year }),
  });

  return res.json();
}

export async function createTrack(data: ICreateTrack): Promise<boolean> {
  const res = await fetch(`${baseUrl}/tracking/track/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ ...data }),
  });

  return res.json();
}
