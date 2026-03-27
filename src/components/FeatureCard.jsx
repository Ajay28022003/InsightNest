export function FeatureCard({feature}) {
    return (
        <>
        <div className="p-6 border border-slate-300">
            <div>{feature.icon}</div>
            <div>{feature.title}</div>
            <div>{feature.description}</div>
        </div>
        </>
    )
}