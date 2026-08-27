import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetSpace from "@/common/hooks/api/documentation/useGetSpace";
import useDeleteSpace from "@/common/hooks/api/documentation/useDeleteSpace";
import Loader from "@/common/ui/loader/Loader";
import Button from "@/common/ui/button/Button";
import { Chapter } from "@/modules/space/components/chapter";
import { CreateChapterModal } from "@/modules/space/components/create-chapter-modal";
import { SpaceModal } from "@/modules/documentation/components/space-modal";
import "@/modules/space/style.scss";

type SpaceModuleProps = {
    spaceId: number;
};

export const SpaceModule = ({ spaceId }: SpaceModuleProps) => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetSpace(spaceId);

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isCreateRootOpen, setIsCreateRootOpen] = useState(false);

    const { mutate: deleteSpace } = useDeleteSpace();

    const handleDeleteSpace = () => {
        if (!data) return;

        if (window.confirm(`Удалить пространство "${data.name}" вместе со всеми разделами?`)) {
            deleteSpace(data.id);
            navigate('/documentation');
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    if (!data) {
        return <div className="space">Пространство не найдено</div>;
    }

    return (
        <aside className="space">
            <div className="space__header">
                <p className="space__title">{data.name}</p>
                {data.description && <p className="space__description">{data.description}</p>}

                <div className="space__header-actions">
                    <Button onClick={() => setIsEditOpen(true)}>Редактировать</Button>
                    <Button onClick={handleDeleteSpace}>Удалить</Button>
                </div>
            </div>

            <div className="space__tree-header">
                <Button onClick={() => setIsCreateRootOpen(true)}>Добавить раздел</Button>
            </div>

            <div className="space__tree">
                {data.chapters.length === 0 && (
                    <p className="space__empty">В пространстве пока нет разделов</p>
                )}

                {data.chapters.map((chapter) => (
                    <Chapter key={chapter.id} {...chapter} spaceId={spaceId} />
                ))}
            </div>

            <SpaceModal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} space={data} />
            <CreateChapterModal
                isOpen={isCreateRootOpen}
                onClose={() => setIsCreateRootOpen(false)}
                spaceId={spaceId}
            />
        </aside>
    );
};
