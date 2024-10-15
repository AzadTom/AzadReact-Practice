import { Routes,Route } from "react-router-dom"
import Homepage from "./pages/HomePage/Homepage"
import InfiniteScrollingPage from "./pages/BlogPage/BlogPage"
import DialogPage from "./pages/DialogPage/DialogPage"
import WebStories from "./components/ReusableComponent/WebStories/WebStories"

function App() {

  
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/infiniteScrolling" element={<InfiniteScrollingPage/>}/>
      <Route path="/model"  element={<DialogPage/>}/>
      <Route path="/web-stories" element={ <WebStories/>}/>
      <Route path="*" element={ <section className="flex justify-center items-center h-screen"> <h2 className="px-4 py-2 bg-blue-600 rounded-md text-white">404 Page</h2> </section> }/>
    </Routes>
    </>
  )
}

export default App