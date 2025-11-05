import useGetBoardUsers from "@/common/hooks/useGetBoardUsers";
import "@/modules/board/components/header/style.scss";
import { useState } from "react";
import AddUserModal from "@/modules/board/components/userModal/AddUserModal";
import { useAuth } from "@/store/authProvider";

interface IBoardHeaderProps {
    title: string;
    description: string;
    boardId: number;
}

const Header = ({ title, description, boardId }: IBoardHeaderProps) => {
    const [open, setOpen] = useState(false);
    const { data } = useGetBoardUsers(boardId);
    const { auth } = useAuth();

    return (
        <header className="board-header">
            <h1 className="board-header__title">
                {title}
            </h1>

            <p className="board-header__description">
                {description}
            </p>

            {data &&
                <ul>
                    {data.map((user) => (
                        <li>
                            {user.fullName}
                        </li>
                    ))}
                </ul>
            }
            
            {auth.user?.role == 'teamlead' &&
                <button onClick={() => setOpen(true)}>
                    Добавить пользователя
                </button>
            }

            {open &&
                <AddUserModal
                    open={open}
                    onClose={() => setOpen(false)}
                />
            }
        </header>
    )
};

export default Header;