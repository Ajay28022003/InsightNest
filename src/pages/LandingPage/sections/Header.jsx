import { Link } from "react-router-dom"

export default function Header() {
    return(
        <>
            <nav className=" flex justify-between items-center bg-black text-white pt-3">
                <div>     
                    <h3 className="ml-40 font-bold">InsightNest AI</h3>
                </div>
                <div className="flex gap-10">
                    <p className="cursor-pointer text-md text-slate-400 hover:text-slate-100 hover:bg-slate-800 px-2 py-2 rounded font">Features</p>
                <p className=" cursor-pointer text-md text-slate-400 hover:text-slate-100 hover:bg-slate-800 px-2 py-2 rounded">Pricing</p>
                <p className=" cursor-pointer text-md text-slate-400 hover:text-slate-100 hover:bg-slate-800 px-2 py-2 rounded">Testimonials</p>
                </div>
                <div className="space-x-3 mr-40">
                    <button className="cursor-pointer text-slate-400 hover:text-slate-100 hover:bg-slate-800 px-2 py-2 rounded">Log In</button>
                    <Link to="/dashboard" className="cursor-pointer bg-violet-600 hover:bg-violet-500 rounded-xl px-5 py-2 ">Get Started {'→'}</Link>
                </div>
            </nav>
        </>
    )
}