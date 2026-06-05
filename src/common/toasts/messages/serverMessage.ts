import { ToastInfo } from '@/common/interfaces/toast';

export const serverError: ToastInfo = {
  title: 'Ошибка',
  description: 'Не удалось загрузить данные',
};

export const boardError: ToastInfo = {
  title: 'Ошибка',
  description: 'Данной доски не существует',
};

export const createSuccess: ToastInfo = {
  title: 'Успех',
  description: 'Задача успешно создана',
};

export const updateSuccess: ToastInfo = {
  title: 'Успех',
  description: 'Задача успешно обновлена',
};
