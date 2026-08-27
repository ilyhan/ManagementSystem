import { useParams } from "react-router-dom";
import { ChapterView } from "@/modules/space/components/chapter-view";

export const ChapterPage = () => {
    const { chapterId } = useParams();

    return <ChapterView chapterId={Number(chapterId)} />;
};
