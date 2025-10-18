import { IUser } from "@/common/interfaces/auth";

export enum EContactType {
    MOBILE = 'Mobile',
    TELEGRAM = 'Telegram',
    EMAIL = 'Email',
}

export type ContactType = 'Mobile' | 'Telegram' | 'Email';

export interface IContact {
    type: EContactType,
    value: string;
}

export interface IEmployee extends IUser {
    grade: string | null;
    contact?: IContact[];
}

export interface IEmployeeShort extends IUser {
    grade: string | null;
    phone: string | null;
}