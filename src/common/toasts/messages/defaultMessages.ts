import { ToastInfo } from '@/common/interfaces/toast';

export const defaultError: ToastInfo = {
  title: 'Ошибка',
  description: 'Упс, что-то пошло не так',
};

export const defaultInfo: ToastInfo = {
  title: 'Информация',
  description: 'Всем привет',
};

export const defaultSuccess: ToastInfo = {
  title: 'Успех',
  description: 'Действие выполнено успешно',
};
