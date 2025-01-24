import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import ClockPage from "./pages/ClockPage/ClockPage";
import IframePage from "./pages/IframePage/IframePage";
import ScrollAnimationPage from "./pages/ScrollAnimationPage/ScrollAnimationPage";

function App() {

  return (
      <ErrorBoundryWrapper>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/model" element={<DialogPage />} />
          <Route path="/infnite-scrolling" element={<BlogPage/>} />
          <Route path="/better-infinite-scrolling" element={<BestBlogPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/nested-comment" element={<NestedComment />} />
          <Route path="/timeline" element={<TimelinePage/>}/>
          <Route path="/clock" element={<ClockPage/>}/>
          <Route path="/iframe" element={<IframePage/>}/>
          <Route path="/scroll-animation" element={<ScrollAnimationPage/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundryWrapper>
  );
}

export default App;
