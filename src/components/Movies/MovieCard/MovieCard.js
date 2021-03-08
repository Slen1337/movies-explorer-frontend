import React from 'react';
import { useLocation } from "react-router"


export default function MovieCard({ movie }){
    const { title, time, image, isSaved } = movie;
    const { pathname } = useLocation();
    return(
        <li className="movie__item">
            <img className="movie__item-img"src={image} alt={title} />
            <div className="movie__text">
            <h3 className="movie__text-title">{title}</h3>  

    <button
        className={
        `movie__button 
        ${isSaved && pathname === "/movies" && "movie__button movie__saved-icon"}
        ${isSaved && (pathname === "/movies" ? "movie__button_type_check" : "movie__button movie__button_type_remove")}
        ${!isSaved && pathname === "/movies" && "movie__button movie__unsaved-icon"}`  
        }
    >          
    </button>

            </div>
            <p className="movie__text-time">{time}</p>
        </li>
    )
}
