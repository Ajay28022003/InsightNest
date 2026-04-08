import { NavLink,Link } from "react-router-dom"
import { accountItems, menuItems } from "../../data/sidebarData"
import { Brain, LogOut } from "lucide-react"

export default function SideBar() {
    return (
        <>
            <aside className="w-64 h-full flex flex-col bg-slate-900/10 border-r border-slate-800 text-white p-6">
                <div className="text-xl font-bold mb-4 cursor-pointer flex gap-4 items-center justify-center">
                    <Brain  color = "violet" className=" "/>
                   <Link to="/"><span>InsightNest AI</span></Link> 
                </div>
                <div className="  w-full tracking-tighter text-slate-800">--------------------------------</div>
                <div className="flex-1 overflow-y-auto mt-4 mb-4 ">
                    <span className="text-xs text-slate-600 block p-2">MENU</span>
                    <ul>
                        {
                            menuItems.map((m, index) => (
                                <li key={index} className="mb-2">
                                    <NavLink
                                        to={m.path}
                                        className={({ isActive }) => `
                                 flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                                 ${isActive ? `bg-violet-600/40 text-violet-400` : `text-slate-400 hover:text-white hover:bg-slate-800`}
                                `}
                                    >
                                        {m.icon}
                                        {/* This renders the text */}
                                        <span>{m.title}</span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <span className="text-xs text-slate-600 block p-2">ACCOUNT</span>
                    <ul>
                        {
                            accountItems.map((p, index) => (
                                <li key={index} className="mb-2">
                                    <NavLink
                                        to={p.path}
                                        className={({ isActive }) => `
                                        flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                                        ${isActive ? 'bg-violet-600/40 text-violet-400' : 'text-slate-400 hover:text-white hover:bg-slate-800'}
                                        `}
                                    >
                                        {p.icon}
                                        <span>{p.title}</span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-violet-600 rounded-lg">
                            J
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">Fang Yuan</span>
                            <span className="text-xs text-slate-500">Pro Plan</span>
                        </div>
                    </div>
                    <LogOut size={18} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
                </div>
            </aside>
        </>
    )
}