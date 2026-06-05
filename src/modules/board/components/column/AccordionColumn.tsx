import { EStatus, ITask } from '@/common/interfaces/task';
import Accordion from '@/common/ui/accordion/Accordion';
import '@/modules/board/components/column/style.scss';
import RenderTasks from '@/modules/board/components/column/RenderTasks';

interface IBoardAccordionColumnProps {
  title: string;
  tasks: ITask[];
  status: EStatus;
}

const AccordionColumn = ({ title, tasks, status }: IBoardAccordionColumnProps) => {
  return (
    <Accordion wrapperClass="board-column" name="column" summary={title}>
      <RenderTasks tasks={tasks} status={status} />
    </Accordion>
  );
};

export default AccordionColumn;
