import LandingPage from "./pages/LandingPage/LandingPage";
import DashboardLayout from "./layouts/DashboardLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Home/>}/>
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
