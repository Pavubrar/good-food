import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipes, fetchSingleRecipe } from "../utils/FetchData";
import Loading from "../components/Loading";


const RecipeDetail = () => {
const [recipe, setRecipe] = useState(null)
const [recipeS, setRecipeS] = useState(null)
const [loading, setLoading] =useState(false)

const {id} = useParams()

const getRecipe = async (id) =>{
  try{
    setLoading(true)
  const data = await fetchSingleRecipe(id)
  setRecipe(data)
 

  const recommend = await fetchRecipes({query: recipe?.label, limit: 5})
  setRecipeS(recommend)
  setLoading(false)
  } catch(error){
    console.error();
    setLoading(false)
  }
}
useEffect(()=>{
  getRecipe(id)
},[id])
if(loading){
  return (  
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Loading/>
    </div>
  );
}
return(
  
)
  
}
 
export default RecipeDetail;
