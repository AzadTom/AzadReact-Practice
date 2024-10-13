import { Routes,Route } from "react-router-dom"
import Homepage from "./pages/HomePage/Homepage"
import InfiniteScrollingPage from "./pages/BlogPage/BlogPage"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/infiniteScrolling" element={<InfiniteScrollingPage/>}/>
    </Routes>
    </>
  )
}

export default App