import Registration from "@/modules/registration/Registration";
import AllBoardsPage from "@/pages/AllBoardsPage";
import BoardPage from "@/pages/BoardPage";
import IssuesPage from "@/pages/IssuesPage";
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/mainPage/MainPage";
import { useAuth } from "@/store/authProvider";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    RouterProvider,
    Outlet,
} from "react-router-dom";

export default function RoutesProvider() {
    const { auth } = useAuth();

    const routesProvider = createBrowserRouter(
        createRoutesFromElements(
            auth.isAuth
                ? <>
                    <Route element={<MainPage />}>
                        <Route path="/" element={<Navigate to="/boards" replace />} />
                        <Route path="boards" element={<AllBoardsPage />} />
                        <Route path="board/:id" element={<BoardPage />} />
                        <Route path="issues" element={<IssuesPage />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </>
                : <>
                    <Route element={<Outlet />}>
                        <Route path="/" element={<Navigate to="/login" replace />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="registration" element={<Registration />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </>
        )
    );

    return (
        <RouterProvider router={routesProvider} />
    );
}
