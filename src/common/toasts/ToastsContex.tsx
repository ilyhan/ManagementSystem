import { ReactNode, createContext, useState } from 'react';
import { IToast } from '@/common/interfaces/toast';

interface IToastContext {
  toasts: IToast[];
  addToast: (data: Omit<IToast, 'id'>) => void;
  removeToast: (id: number) => void;
}

interface IToastsContexProps {
  children: ReactNode;
}

export const ContexToasts = createContext<IToastContext | undefined>(undefined);

const ToastsContex = ({ children }: IToastsContexProps) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const addToast = (data: Omit<IToast, 'id'>) => {
    const toast: IToast = {
      id: Date.now(),
      ...data,
    };

    const tmp = toasts;
    tmp.unshift(toast);
    tmp.splice(5);

    setToasts([...tmp]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ContexToasts.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ContexToasts.Provider>
  );
};

export default ToastsContex;
