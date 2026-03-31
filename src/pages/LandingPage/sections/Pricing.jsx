import PricingCard from "../../../components/PricingCard"
import { pricing } from "../../../data/pricingData"

export default function Pricing() {
    return (
        <>
            <div className="flex justify-center flex-col items-center mb-32">
                <div className="rounded-xl px-4 py-2 text-sm bg-slate-800 mb-3">
                    Pricing
                </div>
                <div className="text-5xl font-bold mb-4">
                    Simple, <span className="bg-linear-to-r from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent">transparent</span> pricing
                </div>
                <div className="text-slate-500 mb-15">
                    Start free. Upgrade when you need more. Cancel anytime.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {
                        pricing.map((p)=>(<PricingCard key={p.id} pricing={p}/>))
                    }
                </div>
            </div>
        </>
    )
}