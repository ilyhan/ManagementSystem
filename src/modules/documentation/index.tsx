import { useState } from "react";
import useGetAllSpaces from "@/common/hooks/api/documentation/useGetAllSpaces";
import { SpaceCard } from "./components/space-card";
import { SpaceModal } from "./components/space-modal";
import Loader from "@/common/ui/loader/Loader";
import Button from "@/common/ui/button/Button";
import "@/modules/documentation/styles.scss";

export const Documentation = () => {
    const { data, isLoading } = useGetAllSpaces();
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    return (
        <div className="documentation">
            <div className="documentation__header">
                <Button onClick={() => setIsCreateOpen(true)}>Создать пространство</Button>
            </div>

            {isLoading && <Loader />}

            {!isLoading && (!data || data.length === 0) && (
                <div>Нет доступных пространств</div>
            )}

            {!isLoading && data && data.length > 0 && (
                <div className="documentation__list">
                    {data.map((space) => (
                        <SpaceCard
                            key={space.id}
                            name={space.name}
                            description={space.description}
                            id={space.id}
                        />
                    ))}
                </div>
            )}

            <SpaceModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
        </div>
    );
};