import { FeatureCard } from "../../../components/FeatureCard";
import { features } from "../../../data/featuresData";

export default function Features() {

    return (
        <>
            <section className="flex flex-col items-center gap-3  p-4 max-w-7xl mx-auto mb-32">
                <div className="bg-slate-800 px-3 py-1 rounded-xl mb-2 text-sm "> Features</div>
                <h2 className="text-5xl font-bold">
                    Everything you need to <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">learn faster</span>
                </h2>
                <p className="flex justify-center mb-10 text-slate-600 max-w-2xl">
                    Powerful AI tools combined with a beautiful knowledge management system.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {
                        features.map((f)=>(
                            <FeatureCard key={f.id} feature={f}/>
                        ))
                    }
                </div>
            </section>
        </>
    )
} 