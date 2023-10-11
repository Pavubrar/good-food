
import {Image1, Image2, Image3,Image4} from "../images/Image"


const images =[Image1,Image2,Image3,Image4]

// eslint-disable-next-line react/prop-types
const Header = ({title, image, type}) => {
    return (
        <>
            <div className="w-full h-[100vh]">
            <div className="relative w-full h-full">
            <img src={image ?? images [Math.floor(Math.random()* images.length)]} alt="Heo image" className="w-full h-full object-cover"

            />

            </div>
            <div className="absolute w-full h-full bg-gradient-to-t from from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4">
                <h1 className="text-white text-4xl md:text-5xl font-bold text-center">{title}</h1>
                {
                    type && (
                    <p>Welcome to Good-Food
                    <br className="hidden md:block" />
                    Discover a treasure trove of delectable recipes from around the globe.
                    </p>
                    )
                }
            </div>
               
            </div>
        </>
      );
}
 
export default Header;
