export default function CTA() {

    return (
        <>
            <section className="mt-10 flex items-center justify-center py-24 px-4">
                <div className="relative w-full max-w-5xl bg-[#0f0f1a] border border-slate-800 rounded-3xl p-12 md:p-20 text-center overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-violet-600/20 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Ready to build your <br className="hidden md:block" />
                            <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">knowledge empire?</span>
                        </h2>

                        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                            Join over 12,000+ active users who are reading faster, remembering more, and building their personal AI library.
                        </p>

                        {/* THE BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                                Get Started for Free
                            </button>
                            <button className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-slate-700">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}