import { useEffect, useMemo, useState } from "react";
import { ToastInfo, ToastType } from '@/common/interfaces/toast';
import {
    defaultError,
    defaultInfo,
    defaultSuccess,
} from "@/common/toasts/messages/defaultMessages"
import "@/common/toasts/components/toast/style.scss";
import { useToastsContext } from "@/common/hooks/useToastsContext";
import success from "/public/images/toast_success.svg";
import error from "/public/images/toast_error.svg";
import info from "/public/images/toast_info.svg";
import close from "/public/images/close.svg";

interface IToastProps {
    message?: ToastInfo;
    id: number;
    type: ToastType;
};

export default function Toast({ message, id, type }: IToastProps) {
    const [isRemove, setIsRemove] = useState(false);
    const { removeToast } = useToastsContext();

    const closeToast = () => {
        setIsRemove(true);
        setTimeout(() => removeToast(id), 200);
    };

    useEffect(() => {
        const timer = setTimeout(closeToast, 4000);
        return () => clearTimeout(timer);
    }, []);

    const toastContent = useMemo(() => ({
        info: (
            <>
                <img src={info} height="25px" width="25px" alt="info" />
                <div>
                    <h4 className={"toast__title"}>{message?.title ?? defaultInfo.title}</h4>
                    <p className={"toast__message"}>{message?.description ?? defaultInfo.description}</p>
                </div>
            </>
        ),
        success: (
            <>
                <img src={success} height="25px" width="25px" alt="success" />
                <div>
                    <h4 className={"toast__title"}>{message?.title ?? defaultSuccess.title}</h4>
                    <p className={"toast__message"}>{message?.description ?? defaultSuccess.description}</p>
                </div>
            </>
        ),
        error: (
            <>
                <img src={error} height="25px" width="25px" alt="error" />
                <div>
                    <h4 className={"toast__title"}>{message?.title ?? defaultError.title}</h4>
                    <p className={"toast__message"}>{message?.description ?? defaultError.description}</p>
                </div>
            </>
        ),
    }), [message]);

    return (
        <div
            className={`toast toast_${[type]} 
                      ${isRemove ? 'toast_remove' : 'toast_show'}
            `}
        >
            {toastContent[type]}
            <div className='toast__buttonWrapper'>
                <button
                    onClick={closeToast}
                    style={{ color: 'black', height: '22px' }}
                    className="toast__button"
                >
                    <img src={close} height="15px" width="15px" alt="close" />
                </button>
            </div>
        </div>
    );
}