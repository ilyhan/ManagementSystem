import { ITask } from "@/common/interfaces/task";
import Accordion from "@/common/ui/accordion/Accordion";
import "@/modules/board/components/column/style.scss";
import RenderTasks from "@/modules/board/components/column/RenderTasks";

interface IBoardAccordionColumnProps {
    title: string;
    tasks: ITask[];
}

const AccordionColumn = ({ title, tasks }: IBoardAccordionColumnProps) => {
    return (
        <Accordion wrapperClass="board-column" name="column" summary={title}>
            <RenderTasks tasks={tasks}/>
        </Accordion>
    )
};

export default AccordionColumn;