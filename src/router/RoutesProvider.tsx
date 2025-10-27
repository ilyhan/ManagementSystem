import Registration from "@/modules/registration/Registration";
import AllBoardsPage from "@/pages/AllBoardsPage";
import AllEmployeesPage from "@/pages/AllEmployeesPage";
import BoardPage from "@/pages/BoardPage";
import EmployeePage from "@/pages/EmployeePage";
import IssuesPage from "@/pages/IssuesPage";
import LoginPage from "@/pages/LoginPage";
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
                    <Route path="employees" element={<AllEmployeesPage />} />
                    <Route path="employees/:id" element={<EmployeePage />} />
                    <Route path="issues" element={<IssuesPage />} />
                </Route>

                <Route path="login" element={<LoginPage />} />
                <Route path="registration" element={<Registration />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </>
        )
    );

    return (
        <RouterProvider router={routesProvider} />
    );
}
