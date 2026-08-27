import { MouseEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "@/router/lib";
import { ChapterTreeNode } from "@/common/interfaces/documentation";
import useDeleteChapter from "@/common/hooks/api/documentation/useDeleteChapter";
import { CreateChapterModal } from "@/modules/space/components/create-chapter-modal";
import "@/modules/space/components/chapter/style.scss";

type ChapterProps = ChapterTreeNode & {
    spaceId: number;
    depth?: number;
};

export const Chapter = ({ id, name, isFolder, children, spaceId, depth = 0 }: ChapterProps) => {
    const navigate = useNavigate();
    const { chapterId: activeChapterId } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [isCreateChildOpen, setIsCreateChildOpen] = useState(false);

    const { mutate: deleteChapter } = useDeleteChapter();

    const isActive = String(id) === activeChapterId;
    const hasChildren = !!children && children.length > 0;

    const handleNavigate = () => {
        const spaceRoute = RouteNames.SPACE.split('/')[0];
        const chapterRoute = RouteNames.CHAPTER.split('/')[0];
        navigate(`/${spaceRoute}/${spaceId}/${chapterRoute}/${id}`);
    };

    const handleToggle = (e: MouseEvent) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    const handleAddChild = (e: MouseEvent) => {
        e.stopPropagation();
        setIsCreateChildOpen(true);
    };

    const handleDelete = (e: MouseEvent) => {
        e.stopPropagation();

        if (window.confirm(`Удалить раздел "${name}"?`)) {
            deleteChapter({ id, spaceId });
        }
    };

    return (
        <div className="chapter">
            <div
                className={`chapter__row ${isActive ? 'chapter__row_active' : ''}`}
                style={{ paddingLeft: depth * 16 }}
                onClick={handleNavigate}
            >
                {isFolder && (
                    <button
                        type="button"
                        className={`chapter__toggle ${isOpen ? 'chapter__toggle_open' : ''}`}
                        onClick={handleToggle}
                    >
                        ▶
                    </button>
                )}

                <span className="chapter__name">{name}</span>

                <span className="chapter__actions">
                    <button type="button" className="chapter__action" onClick={handleAddChild} title="Добавить подраздел">
                        +
                    </button>
                    <button type="button" className="chapter__action" onClick={handleDelete} title="Удалить">
                        ×
                    </button>
                </span>
            </div>

            {isFolder && isOpen && hasChildren && (
                <div className="chapter__children">
                    {children!.map((child) => (
                        <Chapter key={child.id} {...child} spaceId={spaceId} depth={depth + 1} />
                    ))}
                </div>
            )}

            <CreateChapterModal
                isOpen={isCreateChildOpen}
                onClose={() => setIsCreateChildOpen(false)}
                spaceId={spaceId}
                parentId={id}
            />
        </div>
    );
};
