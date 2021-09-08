import React from 'react';

function FilmDiv({film, filmSelected, newFilms}) {
    var newFilm = () => filmSelected(film);
    return(
        <div className='film' onClick={newFilm}>
                <img src={film.image} className='image' />
                <div className='name'>{film.name}</div>
                <div className='ranking'>{film.ranking}</div>                
        </div>
    );
}

export default FilmDiv;