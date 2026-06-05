export type UserRole = 'teamlead' | 'developer';

export interface IUser {
  id: number;
  email: string;
  name: string;
  surname: string;
}

export interface IUserReq {
  email: string;
  name: string;
  surname: string;
  role?: UserRole;
  password?: string;
}

export interface IUserAuth extends Omit<IUserReq, 'passowrd'> {
  id: number;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserResponse {
  token: string;
  user: IUserAuth;
}

export interface IAuth {
  isAuth: boolean;
  user?: IUserAuth;
  token?: string;
}
