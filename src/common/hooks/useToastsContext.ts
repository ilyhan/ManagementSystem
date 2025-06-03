
import { useContext } from "react";
import { ContexToasts } from "@/common/toasts/ToastsContex";

export const useToastsContext = () => {
    const context = useContext(ContexToasts);
    if(!context) {
        throw new Error("Error context");
    }
    
    return context;
};
