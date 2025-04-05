import "./App.css";
import 'remixicon/fonts/remixicon.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import BlogPage from "./pages/BlogPage/BlogPage";
import DialogPage from "./pages/DialogPage/DialogPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Register from "./pages/Register/Register";
import NestedComment from "./pages/NestedComment/NestedComment";
import ButtonPage from "./pages/ButtonPage/ButtonPage";
import BestBlogPage from "./pages/BlogPage/BestBlogPage";
import ErrorBoundryWrapper from "./components/ui/ErrorBoundry/ErrorBoundryWrapper.tsx";
import NavBar from "./components/ui/Navbar/Navbar.tsx";
import TimelinePage from "./pages/TimelinePage/TimelinePage";
// import ClockPage from "./pages/ClockPage/ClockPage";
import IframePage from "./pages/IframePage/IframePage";
import ScrollAnimationPage from "./pages/ScrollAnimationPage/ScrollAnimationPage";
import AnimationPage from "./pages/AnimationPage/AnimationPage.tsx";
import PDFPage from "./pages/PDFPage/PDFPage.tsx";
import TransitionPage from "./pages/TransitionPage/TransitionPage.tsx";
import PracticeClock from "./pages/ClockPage/PracticeClock.tsx";
import Portfolio from "./project/portfolio/index.tsx";

function App() {
  const location = useLocation();
  const listOfRoutes = ["/project/portfolio"];

  return (
    <ErrorBoundryWrapper>
      {listOfRoutes.includes(location.pathname) ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/model" element={<DialogPage />} />
        <Route path="/infnite-scrolling" element={<BlogPage />} />
        <Route path="/better-infinite-scrolling" element={<BestBlogPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nested-comment" element={<NestedComment />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/clock" element={<PracticeClock />} />
        <Route path="/iframe" element={<IframePage />} />
        <Route path="/scroll-animation" element={<ScrollAnimationPage />} />
        <Route path="/get-animation" element={<AnimationPage />} />
        <Route path="/pdf" element={<PDFPage />} />
        <Route path="/transition" element={<TransitionPage />} />
        <Route path="/project/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundryWrapper>
  );
}

export default App;
