import { Zap, Flame, Star, BookOpen, Clock, Heart, Bookmark, Share2, TrendingUp, Sparkles, FlameIcon, StarIcon, Timer, Check } from "lucide-react";
import { articles } from "../data/articleData";
import { trending, streak } from "../data/trendingData";

export default function Home() {

    return (
        <>
            <div className="flex gap-8 h-full text-white">
                <div className="flex-1 flex flex-col gap-7  ">
                    <div>
                        <h3 className="text-2xl font-bold">
                            Good Morning, John 👋
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
                        articles.map((a,index) => (
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

                <div className="w-80 hidden xl:flex flex-col p-4 gap-8">
                    <div className="mb-5">
                        <div className="flex justify-between mb-5 ">
                            <h1 className="font-semibold text-white text-md">Trending Topics</h1>
                            <TrendingUp size={16} className="text-slate-500" />
                        </div>
                        <div className="flex flex-col gap-5">
                            {
                                trending.map((t, index) => (
                                    <div  key ={t.id} className="flex justify-between items-center">
                                        <div className="flex gap-4 items-center">
                                            <span  className="text-slate-700 text-xs">{t.id}</span>
                                            <span className="text-violet-100 text-sm">{t.title}</span>
                                        </div>
                                        <span className="text-xs text-slate-700">{t.views}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-4">
                            <span>Daily Digest</span>
                            <Sparkles size={16} className="text-violet-400" />
                        </div>
                        <div className="bg-[#0B0B14] border border-slate-800/80 p-5 flex flex-col gap-2 rounded-xl">
                            <p className="text-[10px] font-medium text-violet-400 bg-violet-900/20 px-2.5 py-1 rounded-md w-fit">Today's Highlight</p>
                            <span>The Science of Learning Retention</span>
                            <p className="text-xs text-slate-700">Discover the spaced repetition technique that improves memory recall by 200%.</p>
                            <div className="flex justify-between text-xs p-1">
                                <div className="flex items-center gap-2">
                                    <Timer size={14} />
                                    <span>3 min</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <StarIcon size={14} className="text-amber-400" fill="currentColor" />
                                    Featured
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-4 items-center">
                            <h3 className="font-semibold text-white text-md">Your Streak</h3>
                            <FlameIcon size={16} className="text-orange-500" />
                        </div>

                        <div className="bg-[#0B0B14] border border-slate-800/80 rounded-2xl p-6 text-center">
                            <h2 className="text-4xl font-bold text-white mb-1">7</h2>
                            <p className="text-xs text-slate-500 mb-6">day streak</p>

                            {/* Mapping the day circles! */}
                            <div className="flex items-center justify-between gap-1">
                                {streak.map((s, index) => (
                                    <div key={s.id} className="flex flex-col items-center gap-2">
                                        {/* If the day is 'done', it's orange. If not, it's dark gray. */}
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${s.done ? 'bg-orange-900/40 text-orange-500 border border-orange-700/50' : 'bg-[#0f0f1a] border border-slate-800'}`}>
                                            {s.done && <Check size={12} strokeWidth={3} />}
                                        </div>
                                        <span className="text-[10px] text-slate-500">{s.day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}