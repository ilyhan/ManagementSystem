import PreviewBoard from "@/modules/allBoards/components/PreviewBoard/PreviewBoard";
import "@/modules/allBoards/style.scss";

const AllBoards = () => {
    return (
        <section className="boards__wrapper">
            <PreviewBoard
                id={1}
                title="Доска номер 1 с темой такой то такой sdcs"
            />

            <PreviewBoard
                id={2}
                title="Доска номер 2 с темой такой то такой sqdcs"
            />

            <PreviewBoard
                id={3}
                title="Доска номер 3 с темой такой то такой ewefd"
            />
        </section>
    )
}

export default AllBoards;
