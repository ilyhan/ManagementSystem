import useGetAllBoards from "@/common/hooks/useGetAllBoards";
import { EStatus } from "@/common/interfaces/task";
import Accordion from "@/common/ui/accordion/Accordion";
import Checkbox from "@/common/ui/checkbox/Checkbox";
import "@/modules/tasks/components/filterMenu/style.scss";
import { useFilters } from "@/modules/tasks/hooks/useFilters";

const FilterMenu = () => {
    const { data } = useGetAllBoards();
    const { setFilters } = useFilters();

    const handleStatusChange = (status: EStatus, isChecked: boolean) => {
        setFilters(prev => ({
            ...prev,
            status: !isChecked
                ? [...prev.status, status]
                : prev.status.filter(stat => stat !== status)
        }));
    };

    const handleBoardChange = (boardName: string, isChecked: boolean) => {
        setFilters(prev => ({
            ...prev,
            boards: !isChecked
                ? [...prev.boards, boardName]
                : prev.boards.filter(board => board !== boardName)
        }));
    };

    return (
        <div className="filter-menu">
            <Accordion summary="Статус">
                <div className="filter-menu__list">
                    <Checkbox
                        label="Выполнить"
                        name="backlog"
                        onChecked={(isChecked) => handleStatusChange(EStatus.BACLOG, isChecked)}
                    />
                    <Checkbox
                        label="В работе"
                        name="inprogress"
                        onChecked={(isChecked) => handleStatusChange(EStatus.INPROGRESS, isChecked)}
                    />
                    <Checkbox
                        label="Выполнено"
                        name="Done"
                        onChecked={(isChecked) => handleStatusChange(EStatus.DONE, isChecked)}
                    />
                </div>
            </Accordion>

            <Accordion summary="Доска">
                <div className="filter-menu__list">
                    {data &&
                        data.map((board) => (
                            <Checkbox
                                key={board.id}
                                label={board.name}
                                name={board.name}
                                onChecked={(isChecked) => handleBoardChange(board.name, isChecked)}
                            />
                        ))
                    }
                </div>
            </Accordion>
        </div>
    )
};

export default FilterMenu;