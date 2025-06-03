import "@/common/ui/accordion/style.scss";
import arrowUp from "/public/images/arrow_up.svg";
import { ReactNode } from "react";

interface IAccordionProps {
    summary: string;
    children: ReactNode;
    wrapperClass?: string;
    name?: string;
};

const Accordion = ({ summary, children, wrapperClass = '', name }: IAccordionProps) => {
    return (
        <div className={"accordion " + wrapperClass}>
            <details name={name} className={"accordion__details "}>
                <summary className={"accordion__summary "}>
                    {summary}
                    <img src={arrowUp} className="accordion__icon" alt="arrow" />
                </summary>
            </details>

            <div className="accordion__content" role="definition">
                <div className={"accordion__content-body"}>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Accordion;