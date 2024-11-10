import { Routes,Route } from "react-router-dom"
import Homepage from "./pages/HomePage/Homepage"
import BlogPage from "./pages/BlogPage/BlogPage"
import DialogPage from "./pages/DialogPage/DialogPage"
import NotFound from "./pages/NotFound/NotFound"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/infinite-scrolling" element={<BlogPage/>}/>
      <Route path="/model"  element={<DialogPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App