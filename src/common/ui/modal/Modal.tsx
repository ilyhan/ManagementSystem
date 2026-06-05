import '@/common/ui/modal/style.scss';
import { createPortal } from 'react-dom';
import { MouseEvent, ReactNode, useEffect, useState } from 'react';

interface IModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ isOpen, children, onClose }: IModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsVisible(false);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`modal__overlay ${isVisible ? 'modal__overlay_open' : ''}`}
      onMouseDown={closeModal}
      data-testid="overlay"
    >
      <div
        className={`modal__content ${isVisible ? 'modal__content_open' : ''}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById('root')!,
  );
};

export default Modal;
