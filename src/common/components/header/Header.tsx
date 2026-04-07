import { NavLink } from "react-router-dom";
import "@/common/components/header/style.scss";
import Button from "@/common/ui/button/Button";
import quit from "/public/images/quit.svg";
import { useState } from "react";
import { useAuth } from "@/store/authProvider";
import CreateBoardModal from "@/common/components/taskModal/CreateBoardModal";
import { RouteNames } from "@/router/lib";

const NAV_LINKS = [
    {
        title: 'Все задачи',
        value: RouteNames.ISSUES,
    },
    {
        title: 'Проекты',
        value: RouteNames.BOARDS,
    },    
    {
        title: 'Сотрудники',
        value: RouteNames.EMPLOYEES,
    },    
    {
        title: 'Трекер',
        value: RouteNames.TRACKER,
    },
];

const Header = () => {
    const { auth, onLogout } = useAuth();
    const [openBoard, setOpenBoard] = useState(false);

    const handleOpenBoard = () => {
        setOpenBoard(true);
    };

    const handleCloseBoard = () => {
        setOpenBoard(false);
    };

    return (
        <header className="header">
            <div className="header__info">
                <p className="header__user">
                    {auth.user?.name + " " + auth.user?.surname}
                </p>

                <button className="header__button" onClick={onLogout}>
                    <img src={quit} alt="выход" />
                </button>
            </div>

            <div className="header__wrapper">
                <nav>
                    <ul className="header__list">
                        {NAV_LINKS.map((link) => (
                            <li>
                                <NavLink to={link.value} className="header__link">
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header__action">
                    {auth.user?.role == 'teamlead' &&
                        <Button onClick={handleOpenBoard}>
                            Добавить доску
                        </Button>
                    }
                </div>

            </div>

            {openBoard && <CreateBoardModal open={openBoard} onClose={handleCloseBoard} />}
        </header>
    )
}

export default Header;