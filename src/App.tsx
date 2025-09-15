import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Careers from "./pages/Careers";
import Home from "./pages/Home";
import LoadingScreen from "./pages/LoadingScreen";
import JobDetails from "./pages/JobDetails";
import Footer from "./components/Footer";
import Learn from "./pages/Learn";
import Apply from "./pages/AnphixLearnApply";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setLoading(false), 800); // ⏳ show for ~0.8s
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // ✅ Only show footer on these routes
  const showFooter =
    location.pathname.startsWith("/careers") || location.pathname.startsWith("/anphix-learn") || location.pathname === "/";

  return (
    <>
      {loading && <LoadingScreen />}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <Box component="main" sx={{ flex: 1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:jobId" element={<JobDetails />} />
            <Route path="/anphix-learn" element={<Learn />} />
            <Route path="/anphix-learn-apply" element={<Apply />} />
          </Routes>
        </Box>

        {/* Footer (conditionally rendered) */}
        {showFooter && <Footer />}
      </Box>
    </>
  );
}
