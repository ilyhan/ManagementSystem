import "@/modules/board/components/header/style.scss";

interface IBoardHeaderProps {
    title: string;
    description: string;
}

const Header = ({ title, description }: IBoardHeaderProps) => {
    return (
        <header className="board-header">
            <h1 className="board-header__title">
                {title}
            </h1>

            <p className="board-header__description">
                {description}
            </p>
        </header>
    )
};

export default Header;