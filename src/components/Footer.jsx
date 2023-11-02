import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button"


function Footer() {
  return (
    <Footer>
    <div className="text-white py-20 bg-gradient">
    <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
    <div className="flex">
    <p className="font-bold text-center">
Good<span className="text-green-500  text-xl">Food</span>
    </p>
    </div>
    <div >
      <p>QUICK LINKS</p>
      <div className="flex flex-col text-start mb-4 md:mb-0">
        <Link to='#'
        className="block md:inline-block py-2 hover:text-gray-500">
          Home
        </Link>
        <Link to='#'
        className="block md:inline-block py-2 hover:text-gray-500">
          About
        </Link>
        <Link to='#'
        className="block md:inline-block py-2 hover:text-gray-500">
          Services
        </Link>
        <Link to='#'
        className="block md:inline-block py-2 hover:text-gray-500">
          Contact
        </Link>
      </div>
    </div>
    <div >
      <p>LEGAL</p>
      <div className="flex flex-col text-start mb-4 md:mb-0">
        <Link to='#'
        className="block md:inline-block py-2 hover:text-gray-500">
          Terms and Conditions
        </Link>
        <Link to='#'
        className="block md:inline-block py-2 hover:text-gray-500">
         License Agreement 
        </Link>
        <Link to='#'
        className="block md:inline-block py-2 hover:text-gray-500">
          Privacy Policy
        </Link>
        <Link to='#'
        className="block md:inline-block py-2 hover:text-gray-500">
          Copyright Information
        </Link>
      </div>
    </div>
    <div className="flex flex-col">
    <p>SOCIAL MEDIA</p>
    <div className="flex mt-4 gap-3">
    <a
                            href='#'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaFacebook size={18} />
                        </a>

                        <a
                            href='#'
                            className='bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href='#'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href='#'
                            className='bg-red-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaYoutube size={18} />
                        </a>
                    </div>

                    <Button
                        title='Sign up'
                        btnType='button'
                        containerStyle='mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px]'
                    />
    </div>
    </div>
    <div className="flex items-center justify-center py-10">
                <span className="text-gray-400 leading-10">Khalsa &copy; 2023</span>
    </div>
    </div>
    </Footer>
  )
}

export default Footer