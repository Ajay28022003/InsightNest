export default function Hero() {
    return (
        <>
            <section className="flex flex-col items-center text-center mt-7">
                <div className="flex items-center gap-2 mb-10 rounded-xl bg-slate-800/50 px-4 border border-slate-700">
                    <span className="w-2 h-2  rounded-full bg-emerald-500"></span>
                    <span className="text-slate-400">Powered By AI</span>
                </div>
                <h1 className="text-5xl md:text-8xl font font-extrabold  tr mb-6 max-w-6xl leading-tight">
                    Summarize <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">knowledge.</span><br />
                    Save ideas.<span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Learn Faster.</span>
                </h1>
                <p className="text-slate-500 text-2xl max-w-3xl mb-10">
                    Transform any article, PDF, or URL into bite-sized insights with AI.<br />
                    Build your personal knowledge library and never forget what matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-20">
                    <button className="px-8 bg-indigo-600 rounded-xl hover:bg-indigo-700 text-white font-medium flex items-center gap-3 justify-center">
                        Start Exploring <span>{'->'}</span>
                    </button>
                    <button className="px-8 py-3 rounded-full border border-slate-700 hover:bg-slate-800 text-white font-medium transition-colors flex items-center gap-2 justify-center">                   <span>⚡</span> Try AI Summarizer
                    </button>
                </div>
            </section>

        </>
    )
}