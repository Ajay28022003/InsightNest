import { menuItems } from "../../data/sidebarData"

export default function SideBar() {
    return (
        <>
            <aside className="w-64 h-full bg-slate-900 border-r border-slate-800 text-white p-6">
                <div>
                    InsightNest AI
                </div>
                <ul>
                    {
                        menuItems.map((m,index)=>(
                            <li key={index}>{m.title}</li>
                        ))
                    }
                </ul>
            </aside>
        </>
    )
}