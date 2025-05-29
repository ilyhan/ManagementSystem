import Header from "@/common/components/header/Header";
import { Outlet } from "react-router-dom";
import "@/pages/mainPage/style.scss";

const MainPage = () => {
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