import { Outlet } from "react-router-dom";
import SideBar from "../components/layout/SideBar";
import TopBar from "../components/layout/TopBar";

export default function DashboardLayout() {

    return (
        <>
            <div className="flex h-screen bg-[#0B0B14] text-white">
                <SideBar/>
                <div className="flex-1 flex flex-col">
                    <TopBar/>
                    <main className="flex-1 p-8">
                        <Outlet/>
                    </main>
                </div >
            </div>

        </>
    )
}