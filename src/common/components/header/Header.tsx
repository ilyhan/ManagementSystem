import { NavLink } from "react-router-dom";
import "@/common/components/header/style.scss";
import Button from "@/common/ui/button/Button";
import TaskModal from "@/common/components/taskModal/CreateModal";
import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <header className="header">
            <nav>
                <ul className="header__list">
                    <li>
                        <NavLink to={"/issues"} className="header__link">
                            Все задачи
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/boards"} className="header__link">
                            Проекты
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <Button onClick={handleOpen}>
                Добавить задачу
            </Button>

            {open && <TaskModal open={open} onClose={handleClose} />}
        </header>
    )
}

export default Header;