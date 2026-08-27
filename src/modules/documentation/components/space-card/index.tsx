import { useNavigate } from 'react-router-dom';
import './style.scss';
import { RouteNames } from '@/router/lib';

type SpaceCardProps = {
    name: string;
    description?: string;
    id: number;
}

export const SpaceCard = ({ name, description, id }: SpaceCardProps) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        const routeName = RouteNames.SPACE.split("/")[0];
        navigate(`/${routeName}/${id}`);
    };

    return (
        <article className='space-card' onClick={handleNavigate}>
            <p className="space-card__title">{name}</p>
            <p className="space-card__description">{description}</p>
        </article>
    )
}