import { InputHTMLAttributes } from 'react';
import '@/common/ui/input/style.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...props }: IInputProps) => {
  return (
    <div className="input__container">
      <label htmlFor={props.name}>{label}</label>

      <input {...props} className={`input ${props.className ? props.className : ''}`} />
    </div>
  );
};

export default Input;
