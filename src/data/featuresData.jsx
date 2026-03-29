import { Brain, Library, Layers, Sparkles, LineChart, TrendingUp } from "lucide-react"

export const features = [
    {
        id: 1,
        title: "AI Summarizer",
        color: "#a855f7",
        description: "Paste any article, URL, or PDF. Get key insights in seconds with advanced AI.",
        icon: <Brain size={24} color="#a855f7" /> 
    },
    {
        id: 2,
        title: "Knowledge Library",
        color: "#8b5cf6",
        description: "Save and organize insights into your personal knowledge base.",
        icon: <Library size={24} color="#8b5cf6" /> 
    },
    {
        id: 3,
        title: "Smart Categories",
        color: "#6366f1",
        description: "Auto-categorize content across 8+ knowledge domains instantly.",
        icon: <Layers size={24} color="#6366f1" />
    },
    {
        id: 4,
        title: "Daily Digest",
        color: "#3b82f6",
        description: "Get personalized daily knowledge snippets curated by AI.",
        icon: <Sparkles size={24} color="#3b82f6" /> 
    },
    {
        id: 5,
        title: "Reading Analytics",
        color: "#06b6d4",
        description: "Track your learning streaks, reading habits, and progress.",
        icon: <LineChart size={24} color="#06b6d4" /> 
    },
    {
        id: 6,
        title: "Trending Insights",
        color: "#14b8a6",
        description: "Discover what the community is reading and saving right now.",
        icon: <TrendingUp size={24} color="#14b8a6" /> 
    }
]