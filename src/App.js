import { useEffect, useState } from "react";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Loader from "./components/common/Loader";
import Home from "./pages/Home/Home";
import Futudrill from "./pages/Futudrill/Futudrill";
import Core from "./pages/core/Core";
import Connect from "./pages/connect/Connect";
import Control from "./pages/control/Control";
import Insight from "./pages/insight/Insight";
import AiCam from "./pages/ai-cam/AiCam";
import StridePABX from "./pages/stride-pabx/StridePABX";
import ERP from "./pages/erp/ERP";
import StrideAI from "./pages/StrideAI/StrideAI";
import NotFound from "./components/common/NotFound";

export default function App() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setLoaderExiting(true), 1600);
    const removeTimer = setTimeout(() => setLoaderVisible(false), 2150);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (!loaderVisible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [loaderVisible]);

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/futudrill" element={<Futudrill />} />
          <Route path="/products/futudrill/core" element={<Core />} />
          <Route path="/products/futudrill/connect" element={<Connect />} />
          <Route path="/products/futudrill/insight" element={<Insight />} />
          <Route path="/products/futudrill/control" element={<Control />} />
          <Route path="/products/futudrill/ai-cam" element={<AiCam />} />
          <Route path="/product/futudrill" element={<Navigate to="/products/futudrill" replace />} />
          <Route path="/product/core" element={<Navigate to="/products/futudrill/core" replace />} />
          <Route path="/product/connect" element={<Navigate to="/products/futudrill/connect" replace />} />
          <Route path="/product/insight" element={<Navigate to="/products/futudrill/insight" replace />} />
          <Route path="/product/control" element={<Navigate to="/products/futudrill/control" replace />} />
          <Route path="/product/futudrill-core" element={<Navigate to="/products/futudrill/core" replace />} />
          <Route path="/product/futudrill-connect" element={<Navigate to="/products/futudrill/connect" replace />} />
          <Route path="/product/futudrill-insight" element={<Navigate to="/products/futudrill/insight" replace />} />
          <Route path="/product/futudrill-control" element={<Navigate to="/products/futudrill/control" replace />} />
          <Route path="/product/futudrill-ai-cam" element={<Navigate to="/products/futudrill/ai-cam" replace />} />
          <Route path="/product/stride-pabx" element={<StridePABX />} />
          <Route path="/products/stride-pabx" element={<Navigate to="/product/stride-pabx" replace />} />
          <Route path="/product/stride-pbx" element={<Navigate to="/product/stride-pabx" replace />} />
          <Route path="/products/stride-pbx" element={<Navigate to="/product/stride-pabx" replace />} />
          <Route path="/product/ERP" element={<ERP />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <StrideAI />
      {loaderVisible && <Loader exiting={loaderExiting} />}
    </Router>
  );
}
