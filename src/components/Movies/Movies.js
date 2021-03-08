import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import MovieCardList from './MovieCardList/MovieCardList';
import SearchForm from '../Form/SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function addMovies(item) {
    return item.keys().map(item);
}

    const movies = addMovies(require.context('../../images/moviesList', false, /\.(png|jpe?g|svg)$/));

    const moviesPaths = movies.map((image) => image.default);

    const time = '1ч 42м';

    const moviesArray = [
        {
        title: '33 слова о дизайне',
        time,
        isSaved: false,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: true,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: false,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: false,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: true,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: false,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: false,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: true,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: false,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: false,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: true,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: false,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: true,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: false,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: false,
        },
        {
        title: '33 слова о дизайне',
        time,
        isSaved: false,
        },
    ];

const defaultMovies = moviesArray.map((movie, index) => {
    const newMovie = { ...movie, image: moviesPaths[index] };
    return newMovie;
});

export const shorty = defaultMovies.filter((movie) => movie.isSaved === true);

export default function Movies(){

    return(
        <>
            <Header>
                <NavBar />
            </Header>
            <SearchForm name='searchform'/>
            <MovieCardList movies={defaultMovies}  />
            <Footer />
        </>
    )
}
