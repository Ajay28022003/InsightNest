export function TestimonialsCard({ testimonials }) {
    return (
        <>
            <div className="flex flex-col justify-between pl-6 pr-10 py-4 rounded-2xl border border-slate-800 hover:border-slate-500 cursor-pointer hover:bg-slate-950">
                <div>
                    <div className="text-amber-500 mb-2">
                        ★★★★★
                    </div>
                    <p className="text-sm text-slate-400">
                        {testimonials.content}
                    </p>
                </div>
                <div className="flex gap-3 items-center mt-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${testimonials.color || 'bg-indigo-600'}`}>
                    {testimonials.initials}
                </div>
                    <div className="text-sm text-slate-200">
                        <p>
                            {testimonials.author}
                        </p>
                        <p className="text-slate-700">
                            {testimonials.role}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}