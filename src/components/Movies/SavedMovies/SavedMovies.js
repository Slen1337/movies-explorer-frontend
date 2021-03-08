import React from 'react';
import NavBar from '../../NavBar/NavBar';
import Header from '../../Header/Header';
import SearchForm from '../../Form/SearchForm/SearchForm';
import Footer from '../../Footer/Footer';
import MovieCardList from '../MovieCardList/MovieCardList';
import { shorty } from '../Movies';

export default function SavedMovies(){
    return(
        <>
            <Header>
                <NavBar/>
            </Header>
            <SearchForm name='searchform' />
            <MovieCardList movies={shorty} isRemovable />
            <Footer />
        </>
    )
}