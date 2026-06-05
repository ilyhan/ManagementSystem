import { ToastInfo, ToastType } from '@/common/interfaces/toast';
import { useToastsContext } from '@/common/hooks/useToastsContext';

export function useToast() {
  const { addToast } = useToastsContext();

  function newToast(type: ToastType, message?: ToastInfo) {
    addToast({ message, type });
  }

  const toastType: Record<ToastType, (message?: ToastInfo) => void> = {
    success: (message?: ToastInfo) => newToast('success', message),
    error: (message?: ToastInfo) => newToast('error', message),
    info: (message?: ToastInfo) => newToast('info', message),
  };

  return toastType;
}
