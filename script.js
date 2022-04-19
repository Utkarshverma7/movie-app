const API_KEY="api_key=694fc8b3d5f5161b0177731528958f70";
const BASE_URL="https://api.themoviedb.org/3";
const API_URL= BASE_URL + "/discover/movie?sort_by=popularity.desc&"+API_KEY;

getmovies(API_URL);
function getmovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data);}
    )
}