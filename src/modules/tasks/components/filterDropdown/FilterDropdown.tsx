import Button from "@/common/ui/button/Button";
import Dropdown from "@/common/ui/dropdown/Dropdown"
import { useState } from "react"
import "@/modules/tasks/components/filterDropdown/style.scss";
import useClickOutRef from "@/common/hooks/useClickOutRef";
import FilterMenu from "@/modules/tasks/components/filterMenu/FilterMenu";

const FilterDropdown = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(prev => !prev);
    };

    const ref = useClickOutRef<HTMLDivElement>(handleClose);

    return (
        <div className="filter-dropdown" ref={ref}>
            <Button onClick={handleToggle}>
                Фильтры
            </Button>

            <Dropdown open={open} style={{ top: '105%', right: 0 }}>
                <FilterMenu />
            </Dropdown>
        </div>
    )
};

export default FilterDropdown;