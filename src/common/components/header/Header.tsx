import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/issues"}>
                            Все задачи
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/boards"}>
                            Проекты
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;