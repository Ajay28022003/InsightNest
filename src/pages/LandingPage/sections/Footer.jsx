export default function Footer() {
    return(
        <>
            <footer className="border-t border-slate-800 bg-[#0B0B14] pt-20 pb-10 px-4 mt-20">
                    <div max-w-7xl mx-auto>
                        <div className="grids grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                            <div className="">
                                <h3>InsightNest AI</h3>
                                <p>Summarize knowledge. Save ideas. Learn faster.</p>
                                <div className="flex gap-4">
                                    <span className="hover:text-white cursor-pointer transition-colors">𝕏</span>
                                    <span className="hover:text-white cursor-pointer transition-colors">in</span>
                                    <span className="hover:text-white cursor-pointer transition-colors">GH</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
        </>
    )
}