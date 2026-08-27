import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useGetChapter from "@/common/hooks/api/documentation/useGetChapter";
import useUpdateChapter from "@/common/hooks/api/documentation/useUpdateChapter";
import useDeleteChapter from "@/common/hooks/api/documentation/useDeleteChapter";
import Loader from "@/common/ui/loader/Loader";
import Button from "@/common/ui/button/Button";
import Input from "@/common/ui/input/Input";
import Textarea from "@/common/ui/textarea/Textarea";
import { MarkdownToolbar } from "@/modules/space/components/markdown-toolbar";
import "@/modules/space/components/chapter-view/style.scss";

type ChapterViewProps = {
    chapterId: number;
};

export const ChapterView = ({ chapterId }: ChapterViewProps) => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetChapter(chapterId);

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const { mutate: updateChapter } = useUpdateChapter();
    const { mutate: deleteChapter } = useDeleteChapter();

    useEffect(() => {
        setIsEditing(false);
        setName(data?.name ?? '');
        setContent(data?.content ?? '');
    }, [data]);

    const handleSave = () => {
        if (!data) return;

        updateChapter({ id: chapterId, spaceId: data.space_id, data: { name, content } });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setName(data?.name ?? '');
        setContent(data?.content ?? '');
        setIsEditing(false);
    };

    const handleDelete = () => {
        if (!data) return;

        if (window.confirm(`Удалить раздел "${data.name}"?`)) {
            deleteChapter({ id: chapterId, spaceId: data.space_id });
            navigate(`/space/${data.space_id}`);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    if (!data) {
        return <div className="chapter-view">Раздел не найден</div>;
    }

    return (
        <div className="chapter-view">
            {isEditing ? (
                <div className="chapter-view__edit">
                    <Input
                        label="Название"
                        name="chapter-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <div className="chapter-view__markdown-field">
                        <label htmlFor="chapter-content">Содержимое (markdown)</label>
                        <MarkdownToolbar textareaRef={textareaRef} value={content} onChange={setContent} />
                        <Textarea
                            name="chapter-content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="chapter-view__textarea chapter-view__textarea_with-toolbar"
                            ref={textareaRef}
                        />
                    </div>
                    <div className="chapter-view__actions">
                        <Button onClick={handleSave}>Сохранить</Button>
                        <Button onClick={handleCancel}>Отмена</Button>
                    </div>
                </div>
            ) : (
                <div className="chapter-view__view">
                    <div className="chapter-view__header">
                        <p className="chapter-view__title">{data.name}</p>
                        <div className="chapter-view__actions">
                            <Button onClick={() => setIsEditing(true)}>Редактировать</Button>
                            <Button onClick={handleDelete}>Удалить</Button>
                        </div>
                    </div>

                    <div className="chapter-view__content">
                        {data.content ? (
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.content}</ReactMarkdown>
                        ) : (
                            <p className="chapter-view__empty">Раздел пока пуст</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
