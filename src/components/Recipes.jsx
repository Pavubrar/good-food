
import { useEffect, useState } from 'react'
import {BsSearchHeart} from 'react-icons/bs'
import Loading from './Loading'
import SearchBar from './SearchBar'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../utils/FetchData,jsx'
const Recipes = () => {
    const [recipes, setRecipes] =useState([])
    const [search, setSearch] =useState('vegan')
    const [limit, setLimit] =useState(30)
    const [loading, setLoading] =useState(false)


    const handleChange =(e)=>{
        setSearch(e.target.value)
    }
    //  const fetchRecipe = async()=> {
    //     try{
    //         const data = await fetchRecipes({search, limit})
    //         setRecipes(data);
    //         setLoading(false)
    //     }catch (error){
    //         console.log(error);
    //     } finally{
    //         setLoading(false)
    //     }
    //  }
     useEffect(()=>{
        setLoading(true)
            fetchRecipes(search).then((response)=>{
                setRecipes(response)
                console.log(response)
            })
        
     },[])

    if(loading){
        return(
            <Loading/>
        )
    }
  return (
    <div className='w-full'>
    <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
      <form className='w-full lg:w-2/4'>
       <SearchBar placeholder='eg. Cake, Vegan, Chicken'
        handleInputChange={handleChange}
       rightIcon={<BsSearchHeart className="text-gray-600"/>}/>
    
      </form>

    </div>
    {
        recipes?.length >0 ? (
            <>
                <div className='w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                    {
                        recipes?.map((item, index)=>(
                            <RecipeCard recipes={recipes} key="index"
                            />
                        )
                        )
                    }
                </div>
            </>
        ): <div className='text-white w-full items-center justify-center py-10'> 
            <p className='text-center'>No Recipe Found</p>
        </div>
    }
    </div>
  )
}

export default Recipes