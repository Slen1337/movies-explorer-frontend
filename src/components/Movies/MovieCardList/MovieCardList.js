import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Button from '../../Button/Button';

export default function MovieCardList({ movies, removeMovie}){
    return(
        <>
        <ul className="movie__list-item movie__box">
            {movies.map((movie, index) => (
                <MovieCard 
                    movie={movie} 
                    key={index} 
                    removeMovie={removeMovie} 
                    buttonTitle='SAVE'
                    saveMovieButtonClassName='movie__savebutton'
                 />
            ))}
 
        </ul>
        
        <div className="movie__box2">
            {
                movies.length > 6 && <Button className="movies__button">Еще</Button>
            }
        </div>
        
        </>
    )
}
