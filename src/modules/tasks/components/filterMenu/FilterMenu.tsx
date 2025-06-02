import useGetAllBoards from "@/common/hooks/useGetAllBoards";
import Accordion from "@/common/ui/accordion/Accordion";
import Button from "@/common/ui/button/Button";
import Checkbox from "@/common/ui/checkbox/Checkbox";
import "@/modules/tasks/components/filterMenu/style.scss";

const FilterMenu = () => {
    const { data } = useGetAllBoards();

    return (
        <div className="filter-menu">
            <Accordion summary="Статус">
                <div className="filter-menu__list">
                    <Checkbox label="Выполнить" name="backlog" />
                    <Checkbox label="В работе" name="inprogress" />
                    <Checkbox label="Выполнено" name="Done" />
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
                            />
                        ))
                    }
                </div>
            </Accordion>

            <Button className="filter-menu__button">
                Применить
            </Button>
        </div>
    )
};

export default FilterMenu;