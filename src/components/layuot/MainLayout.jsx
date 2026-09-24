import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
    return <>
        <Navbar />
        <main className="grow pt-20">
            <Outlet />
        </main>
        <Footer />
    </>
}
