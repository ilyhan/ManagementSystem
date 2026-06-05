
export interface IDayTracking {
    id: number;
    reservedhours: number;
    date: string;
    description: string;
}

export interface IWeekTracking {
    date: string;
    data: IDayTracking[];
}

export interface ITracking {
    data: IWeekTracking[];
}

export interface ICreateTrack {
    date: Date;
    description: string;
    reservedhours: number;
}