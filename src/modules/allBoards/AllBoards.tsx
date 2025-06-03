import useGetAllBoards from "@/common/hooks/useGetAllBoards";
import { useToast } from "@/common/hooks/useToasts";
import { serverError } from "@/common/toasts/messages/serverMessage";
import Loader from "@/common/ui/loader/Loader";
import PreviewBoard from "@/modules/allBoards/components/PreviewBoard/PreviewBoard";
import "@/modules/allBoards/style.scss";
import { useEffect } from "react";

const AllBoards = () => {
    const { data, isError, isLoading } = useGetAllBoards();
    const toasts = useToast();

    useEffect(() => {
        if (isError) {
            toasts.error(serverError);
        }
    }, [isError]);

    return isLoading
        ? <Loader style={{ margin: '0px 50%', translate: '-50%' }} />
        : data && data.length
            ? <section className="boards__wrapper">
                <ul className="boards__list">
                    {data.map(board => (
                        <li key={board.id}>
                            <PreviewBoard
                                {...board}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            : <p>Нет проектов</p>
}

export default AllBoards;
