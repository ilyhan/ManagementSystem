import { ReactNode, useEffect, useState } from 'react';
import './style.scss';
import { clsx } from '@/common/utils/lib';
import { createPortal } from 'react-dom';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
};

//Рендерить в руте через портал
export const Drawer = ({ open, onClose, children }: DrawerProps) => {
  const [delayOpen, setDelayOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setDelayOpen(true);
      }, 300);
    } else {
      setDelayOpen(false);
    }
  }, [open]);

  const handleClose = () => {
    setDelayOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!open) {
    return null;
  }

  let portalContainer = document.getElementById('root');
  if (!portalContainer) {
    portalContainer = document.createElement('div');
    portalContainer.id = 'portal';
    document.body.appendChild(portalContainer);
  }

  const drawerContent = (
    <div className={clsx('drawer', delayOpen && 'drawer--active')}>
      <button onClick={handleClose} className="drawer__close">
        x
      </button>
      {children}
    </div>
  );

  return createPortal(drawerContent, portalContainer);
};
