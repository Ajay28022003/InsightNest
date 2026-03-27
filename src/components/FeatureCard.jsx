export function FeatureCard({feature}) {
    return (
        <>
        <div className="p-6 border border-slate-800 rounded-xl hover:border-slate-500 cursor-pointer hover:bg-slate-950">
            <div className=" border border-slate-700 w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-5">{feature.icon}</div>
            <div className="mb-2 text-lg font-semibold text-slate-100">{feature.title}</div>
            <div className="text-slate-600">{feature.description}</div>
        </div>
        </>
    )
}