
import {app_id, app_key} from '../api.config'
//import axios from 'axios';
const queryStrings ={
    app_id: app_id,
    app_key:app_key
}
export async function fetchRecipes (filter){
    const {search, limit} = filter;
    const url =
    `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${queryStrings.app_id}&app_key=${queryStrings.app_key}&from=0&to=${limit}&`;

    const response = await fetch(url)
    const data = await response.json();
        console.log(data)
        return data?.hits;
}
