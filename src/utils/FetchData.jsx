
import {app_id, app_key} from '../api.config'
import axios from 'axios';
const queryStrings ={
    app_id: app_id,
    app_key:app_key
}
export const fetchRecipes =  async(search, limit) => await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${queryStrings.app_id}&app_key=${queryStrings.app_key}&from=0&to=${limit}&`
)
//     //const{search, limit} = filter;
//     const{app_id, app_key} =queryStrings;
//     try{
//         const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`)

//         const data = await response.json();
//         console.log(data)
//         return data;
//     }
//     catch(e){
//         console.log(e,'something went wrong')
//         return e
//     }
// }

    //const url= `https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}&`;
    

    

//https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=e371f46a&app_key=bc6dc1c7357bfd5daf6ca38d0de37670