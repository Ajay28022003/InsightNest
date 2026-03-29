import { howitworks } from "../../../data/HowitworksData"
import { HowitworksCard } from "../../../components/HowitworksCard"

export default function HowItWorks() {
    return (
        <>
            <div className="flex flex-col items-center p-2 mb-32">
                <div className="px-5 py-2 rounded-xl bg-slate-800 text-white text-sm mb-4">How it works</div>
                <div className="text-5xl font-bold mb-15">
                    Three steps to <span className="bg-linear-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">knowledge mastery</span> 
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    {
                        howitworks.map((h)=>(
                            <HowitworksCard key={h.id} howitworks={h}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}