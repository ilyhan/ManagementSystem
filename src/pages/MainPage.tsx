import Header from "@/common/components/header/Header";
import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainPage;