import { TextareaHTMLAttributes } from "react";
import "@/common/ui/textarea/style.scss";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
};

const Textarea = ({ label, ...props }: ITextareaProps) => {
    return (
        <div className="textarea__container">
            <label htmlFor={props.name}>
                {label}
            </label>

            <textarea
                {...props}
                className={`textarea ${props.className ? props.className : ''}`}
            />
        </div>
    )
};

export default Textarea;