
import NewFilm from './NewFilm.js';
const fetch = require('node-fetch');

async function Convert(page, films, render){
    let url = `http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=f87a4740022e0c571e87fe25d2f56e38`;
    getData(url).then((result)=>{
        films.push(...result);
        render();
    })
}

async function getData(url){
    let newFilms = [];
    let response = await fetch(url);
    let jsonResponse = await response.json();
    
    for(let film of jsonResponse['results']){
        let name = film['original_title'];
        let description = film['overview'];
        let image = `https://image.tmdb.org/t/p/original/${film['poster_path']}`;
        let rank = film['vote-average'];
        let createFilm = new NewFilm(name, description, image, rank);
        newFilms.push(createFilm);
    }
    return newFilms;
}
export default Convert;