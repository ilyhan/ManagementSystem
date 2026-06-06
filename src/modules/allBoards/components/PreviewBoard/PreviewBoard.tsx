import { Link } from 'react-router-dom';
import '@/modules/allBoards/components/PreviewBoard/style.scss';

interface IPreviewBoardProps {
  id: number;
  name: string;
  description?: string;
  name_id?: string;
}

const PreviewBoard = ({ id, name, description, name_id }: IPreviewBoardProps) => {
  return (
    <article className="preview-board">
      <div className="preview-board__top">
        <div className="preview-board__info">
          <h2 className="preview-board__name">{name}</h2>
          {name_id && <span className="preview-board__badge">{name_id}</span>}
        </div>

        <Link to={`/board/${id}`} className="preview-board__link">
          Перейти →
        </Link>
      </div>

      {description && <p className="preview-board__description">{description}</p>}
    </article>
  );
};

export default PreviewBoard;
