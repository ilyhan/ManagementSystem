import Registration from '@/modules/registration/Registration';
import AllBoardsPage from '@/pages/AllBoardsPage';
import AllEmployeesPage from '@/pages/AllEmployeesPage';
import BoardPage from '@/pages/BoardPage';
import EmployeePage from '@/pages/EmployeePage';
import IssuesPage from '@/pages/IssuesPage';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/mainPage/MainPage';
import TrackingPage from '@/pages/TrackingPage';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { RouteNames } from './lib';

export default function RoutesProvider() {
  const routesProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainPage />}>
          <Route path="/" element={<Navigate to="/boards" replace />} />
          <Route path={RouteNames.BOARDS} element={<AllBoardsPage />} />
          <Route path={RouteNames.BOARD_ID} element={<BoardPage />} />
          <Route path={RouteNames.EMPLOYEES} element={<AllEmployeesPage />} />
          <Route path={RouteNames.EMPLOYEE_ID} element={<EmployeePage />} />
          <Route path={RouteNames.TRACKER} element={<TrackingPage />} />
          <Route path={RouteNames.ISSUES} element={<IssuesPage />} />
        </Route>

        <Route path={RouteNames.LOGIN} element={<LoginPage />} />
        <Route path={RouteNames.REGISTRATION} element={<Registration />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </>,
    ),
  );

  return <RouterProvider router={routesProvider} />;
}
