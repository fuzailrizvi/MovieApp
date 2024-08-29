const token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGQ2Mzc5OTY0ZWI5N2I2MDhlOWIzYTBjNGZkMjI3MSIsIm5iZiI6MTcyNDc0MTUwNS43NjA0MTksInN1YiI6IjY2Y2Q1Y2MxYjcxMzk2NWQyNmM0MWZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z9RwP4Bl8ZECykX2CpZ6qXJLO6D9rSq_nwgTJ7uxu5c';
const baseURL='https://api.themoviedb.org/3';
const imageURL='https://image.tmdb.org/t/p/w500'


async function getData(type) {
    const options={
        method: 'GET',
        headers:{
            Authorization: `Bearer ${token}`
        },


    }

    const res=await fetch(`${baseURL}/movie/${type}?language=en-US`,options);
    const data=await res.json();
    return data.results;
    
    
}

function createSection(heading,movies){
    const section=document.createElement('section');
    const headingEle=document.createElement('h2');
    headingEle.innerText=heading;
    section.append(headingEle);

    const div=document.createElement('div');
    for(let movie of movies){
        const article=document.createElement('article');

    article.innerHTML=`<img src="${imageURL+movie.poster_path}" alt="">`;
    div.append(article);
    }

    section.append(div);
    return section;

    
}

function changeHeader(movies){

    
    
    
    const randomIndex=Math.floor(Math.random()*movies.length);

    let movie=movies[randomIndex];
    
    
    
    const header=document.querySelector('header');

    header.style.background=`linear-gradient(rgb(255,255,255,0),#171717),url(${'https://image.tmdb.org/t/p/original' + movie.backdrop_path})`;
    header.style.backgroundSize='cover';
    header.style.backgroundPosition='center';
}

async function main() 
{
    const main=document.querySelector('main');
    const topratedMoviesData=  getData('top_rated');
    const  popularMoviesData= getData('popular');
    const upcomingMoviesData= getData('upcoming');

    const data= await Promise.all([topratedMoviesData,popularMoviesData,upcomingMoviesData]);

    const topratedMoviessection= createSection('Top Rated Movies',data[0]);
    const popularMoviesSection=createSection('Popular Movies', data[1]);
    const upcomingMoviesSection=createSection("Upcoming Movies",data[2]);

    
    changeHeader(data[1]);
    main.append(popularMoviesSection);

    main.append(topratedMoviessection);
    main.append(upcomingMoviesSection);
    
    
}

main();