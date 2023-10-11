
import { Routes, Route, Outlet } from "react-router-dom"

import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
//import recipes from "./pages/RecipeDetail"
import RecipeDetail from "./pages/RecipeDetail"
function Layout(){
  <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
}
function App() {
  

  return (
    <>
      <div className="bg-black">
      <Routes>
        < Route path="/" element={<Layout/>}/>
        < Route main element={<Home/>}/>
        < Route path="recipes/:id" element={<RecipeDetail/>}/>
        
      </Routes>
     <Home/>
      </div>
      
        
    </>
  )
}

export default App
