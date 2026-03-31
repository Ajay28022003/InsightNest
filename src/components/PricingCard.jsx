

export default function PricingCard({ pricing }) {

    return (
        <>
            <div className={` relative flex flex-col bg-[#0f0f1a] py-8 px-10 rounded-3xl
                ${
                    pricing.isPopular ? 'border border-violet-500 shadow-[0_0_30px_rgba(139,92,246,0.15)] scale-105 z-10'
                    :' border border-slate-800 hover:border-slate-600'
                }
            `}>

                {
                    pricing.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-linear-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                            Most Popular
                        </span>
                    </div>
                    )
                }
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-white mb-2">{pricing.tier}</h1>
                    <p className="text-slate-400 text-sm">{pricing.tagline}</p>
                </div>
                <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{pricing.price}</span>
                    <span className="text-slate-500 text-sm">{pricing.period}</span>
                </div>
                <div className="flex-1 mb-8">
                    <ul className="space-y-4">
                        {
                            pricing.feature.map((f, index) => (
                                <li className="flex text-slate-300 text-sm items-center gap-3" key={index}>
                                    <span className="text-violet-500">✓</span>{f}</li>
                            ))
                        }
                    </ul>
                </div>
                <button className={`w-full text-white py-3 rounded-xl font-semibold transition-colors
                    ${
                        pricing.isPopular ? "bg-violet-600 hover:bg-violet-500"
                        : "bg-slate-800 hover:bg-slate-700"
                    }
                `}>
                {pricing.buttonText}
            </button>
            </div>
        </>


    )
}