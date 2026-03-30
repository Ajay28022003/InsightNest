import { TestimonialsCard } from "../../../components/TestimonialsCard"
import { testimonials } from "../../../data/testimonialsData"

export default function Testimonials() {

     return (
        <>
            <section className="flex justify-center flex-col items-center gap- px-4 mb-32">
                <div className="bg-slate-800 rounded-xl px-4 py-2 text-sm mb-3">
                    Testimonials
                </div>
                <div className="text-5xl font-bold mb-13">
                    Loved by <span className="bg-linear-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">knowledge seekers</span>
                </div>
                <div className="grid gris-col-1 md:grid-cols-3 w-full max-w-6xl gap-6">
                    {
                        testimonials.map((t)=>(
                            <TestimonialsCard  key={t.id} testimonials={t}/>
                        ))
                    }
                </div>
            </section>
        </>
     )
}