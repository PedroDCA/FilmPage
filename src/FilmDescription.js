import React from 'react';
function FilmDescription ({filmSelected}){
    return(
        <div className='description'>
            <div className='upper'>
                <img src={filmSelected.image} className={filmSelected.image != undefined ? 'image-description' : null}/>
                <div className='name-description'>{filmSelected.name != undefined ? filmSelected.name : 'Click on a movie to show its information'}</div>
            </div>
            <div className='lower'>
                <div className='text-description'>{filmSelected.description}</div>
                <div className='ranking-description'>{filmSelected.rank}</div>
            </div>
        </div>
    );
}
export default FilmDescription;