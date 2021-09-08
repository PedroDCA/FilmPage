import React from 'react';
import FilmDiv from './FilmDiv.js';

function FilmListDiv({FilmList, FilmSelected, newPage}) {
    
    return(
        <div>
            <button className='addFilms' onClick={newPage}>Add new films</button>
            <div className='filmsCollected'>
                {FilmList.map((films, index)=><FilmDiv key={index} film={films} filmSelected={FilmSelected}/>)}
            </div>
        </div>
    );
}

export default FilmListDiv;