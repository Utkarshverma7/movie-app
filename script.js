const API_KEY="api_key=694fc8b3d5f5161b0177731528958f70";
const BASE_URL="https://api.themoviedb.org/3";
const API_URL= BASE_URL + "/discover/movie?sort_by=popularity.desc&"+API_KEY;
const IMG_url='https://image.tmdb.org/t/p/w500';
const searchURL=BASE_URL+'/search/movie?'+API_KEY;
const main=document.getElementById('main');
const form=document.getElementById('search');
getmovies(API_URL);
function getmovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
        showmovies(data.results);
    })
}
function showmovies(data){
    main.innerHTML='';
     data.forEach(movie => {
         const{title,poster_path,vote_average,overview}=movie;
         const movieEl=document.createElement('div');
         movieEl.classlist.add('movie');
         movieEl.innerHTML=`
            <img src="${IMG_URL+poster_path}" alt="${title}" />
            <div class="movie-info">
                <h2>${title}</h2>
                <span class="${getcolor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>${Overview}</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure cum ex quisquam porro hic reprehenderit quos, blanditiis maxime tenetur recusandae vel consequatur dolore sit necessitatibus non facilis vero labore!
            </div>`

        main.appendChild(movieEl);
        
        });
    }
function getcolor(vote){
    if(vote>=8){
        return 'green'
    }
    else if(vote>=5){
        return 'orange'
    }
    else{
        return 'red'
    }
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const searchTerm=search.value;
    if(searchTerm){
        getmovies(searchURL+'&query='+searchTerm)
    }
    else{
        getmovies(API_URL);
    }
}