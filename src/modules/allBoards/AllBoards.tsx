import PreviewBoard from "@/modules/allBoards/components/PreviewBoard/PreviewBoard";
import "@/modules/allBoards/style.scss";
import useGetAllBoards from "@/modules/allBoards/hooks/useGetAllBoards";

const AllBoards = () => {
    const { data } = useGetAllBoards();

    return data && data.length
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
