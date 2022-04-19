const api="api=694fc8b3d5f5161b0177731528958f70";
const base="https://api.themoviedb.org/3";
const api_url=base + "/discover/movie?sort_by=popularity.desc&"+api;

getmovies(api_url)
function getmovies(api_url){
    fetch(url).then(res=>json()).then(data=>{
        console.log(data);
    })
}