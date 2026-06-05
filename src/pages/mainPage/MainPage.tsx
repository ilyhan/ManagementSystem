import Header from "@/common/components/header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import "@/pages/mainPage/style.scss";
import { useAuth } from "@/store/authProvider";

const MainPage = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();

    if (!auth.isAuth) {
        navigate('/login');
        return null;
    }

    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}

export default MainPage;