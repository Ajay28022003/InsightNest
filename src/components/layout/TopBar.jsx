import { Bell, Search, Sparkles } from "lucide-react"

export default function TopBar() {

    return(
        <>
            <header className="h-20 bg-slate-900/10 flex items-center justify-between px-8 border-b border-slate-800 sticky top-0 z-10">
                    <div className="relative w-96 hidden:md-block">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2" size={18}/>
                        <input type="text" placeholder="Search insights, categories, topics..." 
                               className="w-full  bg-[#0f0f1a] text-sm text-white placeholder-slate-500 
                                          border border-slate-500 rounded-xl pl-11 pr-4 py-2.5 focus:outline-none
                                        focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"/>
                    </div>
                    <div className="flex gap-4 items-center ">
                        <button className="w-10 h-10 rounded-full bg-[#0f0f1a] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                            <Sparkles/>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-[#0f0f1a] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors relative">
                            <Bell size={18}/>
                            <span className="absolute top-2 right-2.5 bg-red-500 w-2 h-2 rounded-full"></span>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-violet-600 flex justify-center items-center font-bold text-sm shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:scale-105 transition-transform">
                            J
                        </button>
                    </div>
            </header>
        </>
    )
}