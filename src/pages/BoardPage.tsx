import { useToast } from "@/common/hooks/useToasts";
import Button from "@/common/ui/button/Button";
import { Board } from "@/modules/board";
import { useEffect } from "react";

const BoardPage = () => {
    useEffect(() => {
        scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const toasts = useToast();

    return (
        <>
            <Button onClick={() => { toasts.success() }}>
                sdcsdc
            </Button>
            <Board />
        </>
    )
}

export default BoardPage;