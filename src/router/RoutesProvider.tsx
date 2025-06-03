import AllBoardsPage from "@/pages/AllBoardsPage";
import BoardPage from "@/pages/BoardPage";
import IssuesPage from "@/pages/IssuesPage";
import MainPage from "@/pages/mainPage/MainPage";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    RouterProvider,
} from "react-router-dom";

export default function RoutesProvider() {
    const routesProvider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route element={<MainPage />}>
                    <Route path="/" element={<Navigate to="/boards" replace />} />
                    <Route path="boards" element={<AllBoardsPage />} />
                    <Route path="board/:id" element={<BoardPage />} />
                    <Route path="issues" element={<IssuesPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </>
        )
    );

    return (
        <RouterProvider router={routesProvider} />
    );
}
