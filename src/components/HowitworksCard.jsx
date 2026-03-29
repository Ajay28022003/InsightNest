

export function HowitworksCard({howitworks}) {
    return (
        <>
            <div className="px-1 py-10 border border-slate-800 hover:border-slate-500 cursor-pointer hover:bg-slate-950 flex items-center flex-col text-center gap-4 rounded-xl">
                <div className="border border-slate-700 w-12 h-12 rounded-lg flex items-center justify-center t"
                style={{backgroundColor: `${howitworks.color}20`}}>{howitworks.icon}</div>
                <div className="text-xl  font-semibold text-slate-300">{howitworks.title}</div>
                <div className="text-sm px-6 text-slate-600">{howitworks.description}</div>
            </div>
        </>
    )
}