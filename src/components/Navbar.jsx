//import { useState } from "react"
import Logo from "../assets/logo-svg.svg"
//import {HiMenuAlt3} from "react-icons/hi"
//import {AiOutlineClose} from "react-icons/ai"
function Navbar() {
    //const [open, setOpen] = useState(false)
  return (
   <>
    <header className="w-full z-10 fixed bg-black opacity-90">
        <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
<a href="/" className=" flex items-center justify-center text-white text-lg cursor-pointer">
    <img src={Logo} alt="logo"/>
    Good<span>Food</span>
</a>
<ul className="hidden md:flex text-white gap-6">
<li>
<a href="/">Home</a>
</li>
<li>
<a href="recipes">Explore</a>
</li>
<li>
<a href="/favorite">Favorite</a>
</li>

</ul>
        </nav>
    </header>
   </>
  )
}

export default Navbar