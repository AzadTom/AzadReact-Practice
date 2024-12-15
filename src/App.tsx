import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import BlogPage from "./pages/BlogPage/BlogPage";
import DialogPage from "./pages/DialogPage/DialogPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Register from "./pages/Register/Register";
import NestedComment from "./pages/NestedComment/NestedComment";
import SignUpModelPage from "./pages/SignupModel/SignUpModelPage";
import ButtonPage from "./pages/ButtonPage/ButtonPage";
import BestBlogPage from "./pages/BlogPage/BestBlogPage";
import { useEffect } from "react";
import ErrorBoundryWrapper from "./features/ErrorBoundry/ErrorBoundryWrapper";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/nested-comment") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "black";
    }
  }, [location]);

  return (
      <ErrorBoundryWrapper>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/model" element={<DialogPage />} />
          <Route path="/scroll-model" element={<SignUpModelPage />} />
          <Route path="/infnite-scrolling" element={<BlogPage/>} />
          <Route path="/better-infinite-scrolling" element={<BestBlogPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/nested-comment" element={<NestedComment />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundryWrapper>
  );
}

export default App;
