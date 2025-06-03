export interface ToastInfo {
    title?: string;
    description?: string;
};

export type ToastType = 'success' | 'info' | 'error' ;

export interface IToast {
    message?: ToastInfo;
    id: number;
    type: ToastType;
};