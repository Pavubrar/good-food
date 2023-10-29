
import { 
  Outlet,
  Route,
  Routes
  } from "react-router-dom"

import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
//import recipes from "./pages/RecipeDetail"
import RecipeDetail from "./pages/RecipeDetail"

const Layout=()=>{
  return(

    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>
    )
}
function App() {
  

  return (
    <>
      <div className="bg-black">
    

      
      <Routes>
        <Route path="/" element={<Layout/>}>
        < Route path="/" element={<Home/>}/>
        < Route path="recipes/:id" element={<RecipeDetail/>}/>
        </Route>
      </Routes>
      
      </div>
      
        
    </>
  )
}

export default App
