import { FeatureCard } from "../../../components/FeatureCard";
import { features } from "../../../data/featuresData";

export default function Features() {

    return (
        <>
            <section className="flex flex-col items-center gap-3  p-4 max-w-7xl mx-auto mb-32">
                <div className="bg-slate-800 px-3 py-1 rounded-xl"> Features</div>
                <h2 className="text-5xl font-bold">
                    Everything you need to learn faster
                </h2>
                <p className="flex justify-center">
                    Powerful AI tools combined with a beautiful knowledge <br/>management system.
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