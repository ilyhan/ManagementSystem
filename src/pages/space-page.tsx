import { Outlet, useParams } from "react-router-dom"
import { SpaceModule } from "@/modules/space";
import "@/pages/space-page.scss";

export const SpacePage = () => {
    const { id } = useParams();

    return (
        <div className="space-page">
            <SpaceModule spaceId={Number(id)} />
            <div className="space-page__content">
                <Outlet />
            </div>
        </div>
    )
}
