import '@/common/ui/dropdown/style.scss';
import { CSSProperties, ReactNode } from 'react';

interface IDropdownProps {
  open: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

const Dropdown = ({ open, children, style }: IDropdownProps) => {
  return (
    <div className={`dropdown dropdown_${open ? 'open' : 'close'}`} style={style}>
      {children}
    </div>
  );
};

export default Dropdown;
