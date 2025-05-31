import { NavLink } from "react-router-dom";
import "@/common/components/header/style.scss";
import Button from "@/common/ui/button/Button";

const Header = () => {
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
            
            <Button>
                Добавить задачу
            </Button>
        </header>
    )
}

export default Header;