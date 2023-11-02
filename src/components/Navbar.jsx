import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/logo-transparent-svg.svg"
import Home from "../pages/Home"
import RecipeDetail from "../pages/RecipeDetail"
import {HiMenuAlt3} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
import Button from "./Button"
function Navbar() {
    const [open, setOpen] = useState(false)
  return (
   <>
    <header className="w-full z-10 fixed bg-black opacity-90">
        <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
<Link to="/" element={Home} className=" flex items-center justify-center text-white text-lg cursor-pointer">
    <img src={Logo} alt="logo" className=" md:block w-14 h-14 rounded-full mr-4 lg:w-24 lg:h-24 z-10"/>
    Good<span>Food</span>
</Link>
<ul className="hidden md:flex text-white gap-6">
<li>
<Link to="/" element={Home}>Home</Link>
</li>
<li>
<Link to="recipes" element={RecipeDetail}>Explore</Link>
</li>
<li>
<a href="/favorite">Favorite</a>
</li>

</ul>
<Button title="Sign in" 
    // eslint-disable-next-line react/no-unknown-property
    containerStyle= ' hidden md:block bg-transparent border border-white text-yellow hover:bg-white hover:tex-green-900 rounded-full min-w-[130px] '
/>
<button className="block md:hidden text-white text-2xl" onClick={()=> setOpen(prev => !prev)}>
    {open ? <AiOutlineClose/> : <HiMenuAlt3/>}
</button>
        </nav>
        <div className={`${open ? "flex":"hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
            <a href="/">Home</a>
            <a href="/#recipes">Explore</a>
            <a href="/">Favorite</a>
        </div>
    </header>
   </>
  )
}

export default Navbar