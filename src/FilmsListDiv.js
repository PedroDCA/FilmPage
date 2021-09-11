import React, { useEffect, useRef} from "react";
import FilmDiv from './FilmDiv.js';

function FilmListDiv({FilmList, FilmSelected, newPage}) {

    const ref = useRef(null)

    useEffect(() =>{
        const observer = new IntersectionObserver(newPage, {root: null, threshold: 1.0})
        if(ref.current) observer.observe(ref.current)

        return () => {
            if(ref.current) observer.unobserve(ref.current)
        }
    }, [ref, newPage])
    
    return(
        <div>
            <div className='filmsCollected'>
                {FilmList.map((films, index)=><FilmDiv key={index} film={films} filmSelected={FilmSelected}/>)}
                <div ref={ref}>Loading</div>
            </div>
        </div>
    );
}

export default FilmListDiv;