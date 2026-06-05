import { Link } from 'react-router-dom';
import '@/modules/allBoards/components/PreviewBoard/style.scss';

interface IPreviewBoardProps {
  id: number;
  name: string;
}

const PreviewBoard = ({ id, name }: IPreviewBoardProps) => {
  return (
    <article className="preview-board">
      <p className="preview-board__title">{name}</p>

      <Link to={`/board/${id}`} className="preview-board__link">
        Перейти к доске
      </Link>
    </article>
  );
};

export default PreviewBoard;
