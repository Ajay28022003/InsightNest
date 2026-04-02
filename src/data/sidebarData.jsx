import {Home, Bot, BookOpen, TrendingUp, Layers,  Settings,User,  BarChart2} from "lucide-react"

export const menuItems = [
    {id:1,title:"Home",icon:<Home size={20}/>, path:"/dashboard"},
    {id:2,title:"AI Summarizer",icon:<Bot size={20}/>,path:"/summarizer", badge:"AI"},
    {id:3,title:"My Library",icon:<BookOpen size={20}/>, path:"/library"},
    {id:4,title:"Categories",icon:<Layers size={20}/>,path:"/categories"},
    {id:5,title:"Trending",icon:<TrendingUp size={20}/>,path:"/trending"},
    {id:6,title:"Analytics", icon:<BarChart2 size={20}/>,path:"/analytics"}
]

export const accountItems = [
    {id:1,title:"Profile",icon:<User size={20}/>,path:"/profile"},
    {id:2,title:"Settings",icon:<Settings size={20}/>,path:"/settings"}
]