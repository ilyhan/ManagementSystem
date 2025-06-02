import { Board } from "@/modules/board";
import { useEffect } from "react";

const BoardPage = () => {
    useEffect(() => {
        scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <>
            <Board />
        </>
    )
}

export default BoardPage;