export default function Stats() { 

    return (
        <>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-20">
            <div className="flex flex-col ">
                <h2 className="text-3xl font-bold text-center">12K+</h2>
                <p className="text-sm text-slate-600">Active Users</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-slate-800"></div>
            <div className="">
                <h2 className="text-3xl font-bold text-center">1M+</h2>
                <p className="text-slate-600 text-sm">Summaries Created</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-slate-800 "></div>
            <div>
                <h2 className="text-3xl font-bold text-center">4.9 <span className="text-yellow-500 text-2xl">★</span></h2>
                <p className="text-slate-600 text-sm">User Rating</p>
            </div>
        </div>
        </>
    )
}
