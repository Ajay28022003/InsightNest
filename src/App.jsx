import LandingPage from "./pages/LandingPage/LandingPage";
import DashboardLayout from "./layouts/DashboardLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Summarizer from "./pages/Summarizer";
import Library from "./pages/Library";
import Trending from "./pages/Trending";
import Categories from "./pages/Categories";
import Analytics from "./pages/Analytics";

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="summarizer" element={<Summarizer />} />
            <Route path="library" element={<Library />} />
            <Route path="categories" element={<Categories />} />
            <Route path="trending" element={<Trending />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
