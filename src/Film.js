import React from 'react';
import './Film.css';
import Data from './Data.js';
import FilmsListDiv from './FilmsListDiv.js';
import FilmDescription from './FilmDescription.js';

class Film extends React.Component { 
  constructor(prop){
    super(prop);
    this.films = [];
    this.filmSelected = {};
    this.page = 0;
    this.newFilms();
  }
  newFilmSelected = (movie) => {
    this.filmSelected = movie;
    this.rerender();
  };

  newFilms = () =>{
    this.page++;
    console.log(this.page);
    Data(this.page, this.films, ()=>this.rerender());
  }
  
  loadFilms = () => this.newFilms();

  rerender = ()=>this.forceUpdate();


  render(){

    let newArray = [];
    newArray.push(...this.films);
      return(
        <div className='filmPage'>
          <FilmsListDiv FilmList={newArray} FilmSelected={this.newFilmSelected} newPage={this.loadFilms} />
          <FilmDescription filmSelected={this.filmSelected}/>
      </div>
      );
  }
}

export default Film;