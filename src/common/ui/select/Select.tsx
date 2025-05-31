
import { SelectHTMLAttributes } from "react";
import { IOption } from "@/common/interfaces/select";
import "@/common/ui/input/style.scss";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options?: IOption[];
    withEmptyPlacholder?: boolean;
};

const Select = ({ label, options, withEmptyPlacholder = true, ...props }: ISelectProps) => {
    return (
        <div className="input__container">
            <label htmlFor={props.name}>
                {label}
            </label>

            <select
                {...props}
                className={`input ${props.className ? props.className : ''}`}
                defaultValue={withEmptyPlacholder ? "" : undefined}
            >
                {withEmptyPlacholder && <option value="" hidden disabled></option>}
                {options?.map((item) => (
                    <option key={item.value} value={item.value}>{item.title}</option>
                ))}
            </select>
        </div>
    )
};

export default Select;