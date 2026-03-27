export default function DashboardPreview(){

    return(
        <>
        <section className="flex justify-center px-4 mt-10 mb-32">
            <div className="w-full max-w-5xl rounded-2xl border border-slate-600 shadow-[0_0_80px_-15px_rgba(124,58,237,0.2)] overflow-hidden">
                    <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-[#0f0f1a]">
                        <div className="flex gap-3">
                            <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                        </div>
                        <div className="mx-auto bg-slate-900 rounded-xl px-50 py-1 text-xs text-slate-300">
                                insightnest.ai/dashboard
                        </div>
                    </div>
                    <div className="p-2 min-h-75 md:min-h-125 flex items-center justify-center bg-slate-900/40">
                        <p className="text-slate-500">Drop your Dashboard Screenshot Image Here</p>
                    </div>
            </div>
        </section>
        </>
    )
}