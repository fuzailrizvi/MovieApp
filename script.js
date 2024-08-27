const token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGQ2Mzc5OTY0ZWI5N2I2MDhlOWIzYTBjNGZkMjI3MSIsIm5iZiI6MTcyNDc0MTUwNS43NjA0MTksInN1YiI6IjY2Y2Q1Y2MxYjcxMzk2NWQyNmM0MWZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z9RwP4Bl8ZECykX2CpZ6qXJLO6D9rSq_nwgTJ7uxu5c';
const baseURL='https://api.themoviedb.org/3';

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
    section.append('headingEle');
}

async function main() 
{
    const data= await getData('top_rated');

    console.log(data);
    
    
}

main();

