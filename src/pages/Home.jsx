import { Zap, Flame, Star, BookOpen, Clock, Heart, Bookmark, Share2 } from "lucide-react";
import { articles } from "../data/articleData";

export default function Home() {

    return (
        <>
            <div className="flex gap-8 h-full text-white">
                <div className="flex-1 flex flex-col gap-7">
                    <div>
                        <h3 className="text-2xl font-bold">
                            Good morning, John 👋
                        </h3>
                        <p className="text-slate-600">Discover today's best insights curated for you.</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <button className="flex items-center gap-2 px-5 py-2 bg-violet-900/20 border border-violet-700/50 text-violet-400 rounded-full text-sm font-medium transition-all shadow-[0_0_10px_rgba(139,92,246,0.1)]
                                            hover:text-slate-300 hover:bg-violet-900/50 cursor-pointer">
                            <Zap size={16} color="violet" />
                            <span>AI Summarizer</span>
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 bg-violet-900/20 border border-violet-700/50 text-violet-400 rounded-full text-sm font-medium transition-all shadow-[0_0_10px_rgba(139,92,246,0.1)] hover:text-slate-300 hover:bg-violet-900/50 cursor-pointer">
                            <Flame size={16} color="orange" />
                            <span>Trending</span>
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 bg-violet-900/20 border border-violet-700/50 text-violet-400 rounded-full text-sm font-medium transition-all shadow-[0_0_10px_rgba(139,92,246,0.1)] hover:text-slate-300 hover:bg-violet-900/50 cursor-pointer">
                            <Star size={16} color="yellow" />
                            <span>For You</span>
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 bg-violet-900/20 border border-violet-700/50 text-violet-400 rounded-full text-sm font-medium transition-all shadow-[0_0_10px_rgba(139,92,246,0.1)] hover:text-slate-300 hover:bg-violet-900/50 cursor-pointer">
                            <BookOpen size={16} color="cyan" />
                            <span>Reading List</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">{
                        articles.map((a) => (
                            <div key={a.id} className="gap-3 border border-slate-800/80 bg-[#0B0B14] p-5 rounded-xl flex flex-col hover:border-slate-700 transition-colors">
                                <span className={`text-[10px] w-fit font-semibold px-2.5 py-1 rounded-full ${a.categoryColor}`}>{a.category}</span>
                                <h4 className="text-white font-semibold text-lg mt-1 ">
                                    {a.title}
                                </h4>
                                <p className="text-sm text-slate-600 flex-1">{a.desc}</p>
                                {/* Added pt-4, mt-auto, and border-t here! */}
                                <div className="flex justify-between items-center pt-4 mt-auto border-t border-slate-800/50">
                                    <div className="flex gap-2 items-center text-slate-500">
                                        <Clock size={14} />
                                        <span className="text-xs">{a.time}</span>
                                    </div>
                                    <div className="flex gap-2 items-center text-slate-500 ">
                                        <button className=""><Heart size={14} /></button>
                                        <button><Bookmark size={14} /></button>
                                        <button><Share2 size={14} /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="w-70 bg-blue-600">
                    Right Panel
                </div>

            </div>
        </>
    )
}