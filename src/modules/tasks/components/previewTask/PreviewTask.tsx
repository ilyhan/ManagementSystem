import "@/modules/tasks/components/previewTask/style.scss";

interface IPreviewTaskProps {
    id: number;
    title: string;
    boardName: string;
}

const PreviewTask = ({ title, boardName }: IPreviewTaskProps) => {
    return (
        <article className="preview-task">
            <div className="preview-task__content">
                <p className="preview-task__title">
                    {title}
                </p>

                <p className="preview-task__board">
                    {boardName}
                </p>
            </div>

            <button className="preview-task__button">
                Подробнее
            </button>
        </article>
    )
};

export default PreviewTask;