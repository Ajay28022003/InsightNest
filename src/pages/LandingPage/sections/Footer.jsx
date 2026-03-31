export default function Footer() {
    return (
        <>
            <footer className="border-t border-slate-800 bg-[#0B0B14] pt-20 pb-10 px-4 mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <h3 className="text-xl font-bold text-white mb-4">InsightNest AI</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">Summarize knowledge. Save ideas. Learn faster.</p>
                            <div className="flex gap-4 text-slate-400">
                                <span className="hover:text-white cursor-pointer transition-colors">𝕏</span>
                                <span className="hover:text-white cursor-pointer transition-colors">in</span>
                                <span className="hover:text-white cursor-pointer transition-colors">GH</span>
                            </div>
                        </div>
                        <div >
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li className="">Features</li>
                                <li className="">Pricing</li>
                                <li className="">API</li>
                                <li className="">Changelog</li>
                            </ul>
                        </div>
                        <div >
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li className="">About</li>
                                <li className="">Blog</li>
                                <li className="">Careers</li>
                                <li className="">Press</li>
                            </ul>
                        </div>
                        <div >
                            <h4 className="text-white font-semibold mb-4">Legal</h4>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li className="">Privacy</li>
                                <li className="">Terms</li>
                                <li className="">Security</li>
                                <li className="">Cookies</li>
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="text-white font-semibold mb-4">Support</h4>
                            <ul className="text-slate-400 space-y-4 text-sm">
                                <li className="">Health Centre</li>
                                <li className="">Contact</li>
                                <li className="">Status</li>
                                <li className="">Community</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm text-center md:text-left">
                            © 2026 InsightNest AI. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-slate-500">
                            <span className="hover:text-white cursor-pointer transition-colors">System Status</span>
                            <span className="hover:text-white cursor-pointer transition-colors">Security</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}