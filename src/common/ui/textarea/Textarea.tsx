import { TextareaHTMLAttributes, forwardRef } from 'react';
import '@/common/ui/textarea/style.scss';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(({ label, ...props }, ref) => {
  return (
    <div className="textarea__container">
      <label htmlFor={props.name}>{label}</label>

      <textarea
        {...props}
        ref={ref}
        className={`textarea ${props.className ? props.className : ''}`}
      />
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
