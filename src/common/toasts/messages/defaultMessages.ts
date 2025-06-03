
import { ToastInfo } from '@/common/interfaces/toast';

export const defaultError: ToastInfo = {
    title: 'Ошибка',
    description: 'Упс, что-то пошло не так'
};

export const defaultInfo: ToastInfo = {
    title: 'Информация',
    description: 'Наш проект самый лучший'
};

export const defaultSuccess: ToastInfo = {
    title: 'Успех',
    description: 'Действие выполнено успешно'
};
