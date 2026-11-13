import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import GetQuote from "./pages/GetQuote";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-a-quote" element={<GetQuote />} />
        {/* Keep the previous quote URL working for existing links and bookmarks. */}
        <Route path="/register" element={<Navigate to="/get-a-quote" replace />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
