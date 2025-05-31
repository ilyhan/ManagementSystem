import { ButtonHTMLAttributes, ReactNode } from "react";
import "@/common/ui/button/style.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
};

const Button = ({children, ...props}:IButtonProps) => {
    return(
        <button {...props} className={`button ${props.className}`}>
            {children}
        </button>
    )
};

export default Button;